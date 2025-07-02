const express = require('express');
const router = express.Router();
const { signup, login } = require('../controllers/authController');

// Debugging middleware to confirm route hit
router.post('/signup', (req, res, next) => {
  console.log('SIGNUP route hit');
  next();
}, signup);

router.post('/login', login);

module.exports = router;
