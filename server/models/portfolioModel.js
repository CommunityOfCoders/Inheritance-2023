const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const portfolioSchema = new Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    noc: {
        type: Number,
        required: true
    },
    coininvested: {
        type: String,
        required: true
    },
    isq:{
        type: Number,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('PortfolioDetail', portfolioSchema);
