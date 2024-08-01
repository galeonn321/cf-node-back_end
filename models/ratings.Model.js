const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
    score: {
        type: Number,
        min: 0,
        max: 10,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Rating = mongoose.model('Rating', ratingSchema);

module.exports = Rating;
