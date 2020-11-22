const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types

const QuestionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    options: {
        type: Array,
        required: true
    },
    answers:{ 
        type: Array,
        required: true
    },
    category: {
        type: String,
        required:true
    },
    postedBy: {
        type:ObjectId,
        ref:"User"
    }
})

module.exports = mongoose.model('Question', QuestionSchema)