const mongoose = require('mongoose');

// Defining schema for monthly budget
const budgetSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    month: {
        type: String,
        required: true,
        lowercase: true 
    },
    totalBudget: {
        type: Number,
        required: true
    },
    categoryAllocations: {
        type: Object, 
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Budget', budgetSchema);
