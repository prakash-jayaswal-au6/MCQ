const mongoose = require('mongoose')

const QuestionSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    optionA: {
        type: String,
        required: true
    },
    optionB: {
        type: String,
        required: true
    },
    optionC: {
        type: String,
        required: true
    },
    answer:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Question', QuestionSchema)