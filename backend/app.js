const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const budgetRoutes = require('./routes/budgetRoutes');
const expenseRoutes = require('./routes/expenseRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// Debug print to confirm API group hit
app.use('/api/auth', (req, res, next) => {
  console.log('AUTH ROUTE HIT');
  next();
});

app.use('/api/auth', authRoutes);
app.use('/api/budget', budgetRoutes);
app.use('/api/expenses', expenseRoutes);

// Handle 404
app.use((req, res) => {
  res.status(404).json({ message: 'Router not found' });
});

module.exports = app;
