const mongoose = require('mongoose');

const ResponseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    response: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    },

    question: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Response = mongoose.model('Response', ResponseSchema);

module.exports = Response;