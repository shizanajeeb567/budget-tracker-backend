// controllers/budgetController.js

const budgetService = require('../services/budgetService');

exports.setBudget = async (req, res) => {
    try {
        const budget = await budgetService.setOrUpdateBudget(req.user.id, req.body);
        res.status(200).json(budget);
    } catch (error) {
        res.status(400).json({ message: error.message || 'Setting budget failed' });
    }
};

exports.getBudget = async (req, res) => {
    const { month } = req.query;

    try {
        const budget = await budgetService.getUserBudget(req.user.id, month);
        res.status(200).json(budget);
    } catch (error) {
        res.status(400).json({ message: error.message || 'Fetching budget failed' });
    }
};
