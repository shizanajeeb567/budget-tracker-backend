// controllers/expenseController.js

const expenseService = require('../services/expenseService');

exports.addExpense = async (req, res) => {
    try {
        const expense = await expenseService.createExpense(req.user.id, req.body);
        res.status(201).json(expense);
    } catch (error) {
        res.status(500).json({ message: 'Adding expense failed', error });
    }
};

exports.getExpenses = async (req, res) => {
    const { month, category } = req.query;
    try {
        const expenses = await expenseService.getExpenses(req.user.id, month, category);
        res.status(200).json(expenses);
    } catch (error) {
        res.status(500).json({ message: 'Fetching expenses failed', error });
    }
};

exports.getSummary = async (req, res) => {
    const { month } = req.query;
    try {
        const summary = await expenseService.getSummary(req.user.id, month);
        res.status(200).json(summary);
    } catch (err) {
        const msg = err.message || 'Failed to generate summary';
        res.status(400).json({ message: msg });
    }
};
