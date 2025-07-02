const express= require('express');
const router=express.Router();
const {
    addExpense,
    getExpenses,
    getSummary
} = require('../controllers/expenseController');
const authMiddleware= require('../middlewares/authMiddleware');
router.post('/',authMiddleware, addExpense);
router.get('/',authMiddleware, getExpenses);
router.get('/summary', authMiddleware, getSummary);
module.exports = router;
