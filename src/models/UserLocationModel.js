const mongoose = require('mongoose');

const userLocationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    excluded: {
        type: Boolean,
        default: false
    },
}, { timestamps: true });

module.exports = mongoose.model('UserLocation', userLocationSchema);