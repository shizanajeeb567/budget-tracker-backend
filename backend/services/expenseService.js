// services/expenseService.js

const Expense = require('../models/Expense');
const Budget = require('../models/Budget');

exports.createExpense = async (userId, data) => {
    return await Expense.create({
        userId,
        ...data
    });
};

exports.getExpenses = async (userId, month, category) => {
    const query = { userId };

    if (month && /^\d{4}-\d{2}$/.test(month)) {
        const [year, monthNum] = month.split('-').map(Number);
        const start = new Date(year, monthNum - 1, 1);
        const end = new Date(year, monthNum, 1);
        query.date = { $gte: start, $lt: end };
    }

    if (category) {
        query.category = category;
    }

    return await Expense.find(query);
};

exports.getSummary = async (userId, month) => {
    if (!month || !/^\d{4}-\d{2}$/.test(month)) {
        throw new Error('Invalid month format. Use YYYY-MM (e.g., 2025-06)');
    }

    const [year, monthNum] = month.split('-').map(Number);
    const startOfMonth = new Date(year, monthNum - 1, 1);
    const endOfMonth = new Date(year, monthNum, 1);

    const budget = await Budget.findOne({ userId, month });

    const expenses = await Expense.find({
        userId,
        date: { $gte: startOfMonth, $lt: endOfMonth }
    });

    let totalSpent = 0;
    const categorySpent = {};

    for (const expense of expenses) {
        totalSpent += expense.amount;
        const cat = expense.category || 'Uncategorized';
        categorySpent[cat] = (categorySpent[cat] || 0) + expense.amount;
    }

    const byCategory = {};
    if (budget?.categoryAllocations) {
        for (const [category, allocated] of Object.entries(budget.categoryAllocations)) {
            const spent = categorySpent[category] || 0;
            byCategory[category] = {
                allocated,
                spent,
                remaining: allocated - spent,
                status: spent > allocated ? 'Over Budget' : 'Within Budget'
            };
        }
    }

    return {
        month,
        totalBudget: budget?.totalBudget || 0,
        totalSpent,
        remaining: (budget?.totalBudget || 0) - totalSpent,
        byCategory
    };
};
