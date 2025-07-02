const mongoose = require('mongoose');

// Define schema for a user
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

// Export model (note: model name is capitalized, MongoDB collection will be lowercased and pluralized automatically)
module.exports = mongoose.model('User', userSchema);
