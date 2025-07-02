// services/budgetService.js

const Budget = require('../models/Budget');

exports.setOrUpdateBudget = async (userId, data) => {
    const { totalBudget, categoryAllocations, month } = data;

    if (!month || !/^\d{4}-\d{2}$/.test(month)) {
        throw new Error('Invalid month format. Use YYYY-MM (e.g., 2025-06)');
    }

    const budget = await Budget.findOneAndUpdate(
        { userId, month },
        { totalBudget, categoryAllocations },
        { upsert: true, new: true }
    );

    return budget;
};

exports.getUserBudget = async (userId, month) => {
    if (!month || !/^\d{4}-\d{2}$/.test(month)) {
        throw new Error('Invalid month format. Use YYYY-MM (e.g., 2025-06)');
    }

    const budget = await Budget.findOne({ userId, month });
    if (!budget) throw new Error('No budget found for this month');

    return budget;
};
