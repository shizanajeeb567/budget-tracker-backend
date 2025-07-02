const express= require('express');
const router= express.Router();
const{setBudget, getBudget}=require('../controllers/budgetController');
const authMiddleware=require('../middlewares/authMiddleware');
router.post('/', authMiddleware, setBudget);
router.get('/', authMiddleware, getBudget);
module.exports = router;