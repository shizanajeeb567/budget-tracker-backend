// controllers/authController.js

const authService = require('../services/authService');

exports.signup = async (req, res) => {
    try {
        const result = await authService.signupUser(req.body);
        res.status(201).json(result);
    } catch (error) {
        console.error("Signup error:", error);
        res.status(400).json({ message: error.message || 'Signup failed' });
    }
};

exports.login = async (req, res) => {
    try {
        const result = await authService.loginUser(req.body);
        res.status(200).json(result);
    } catch (error) {
        console.error("Login error:", error);
        res.status(400).json({ message: error.message || 'Login failed' });
    }
};
