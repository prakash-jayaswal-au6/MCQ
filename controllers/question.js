const Question = require('../models/question')
const dotenv = require('dotenv')
dotenv.config();



exports.get_all = async (req, res) => {
    try {
        const questions = await Question.find()
        return res.status(200).json(questions)
    } catch (error) {
        return res.status(500).json({"error":error})
    }
}

exports.get_one = async (req, res) => {
    try {
        const _id = req.params.id 

        const question = await Question.findOne({_id})        
        if(!question){
            return res.status(404).json({})
        }else{
            return res.status(200).json(question)
        }
    } catch (error) {
        return res.status(500).json({"error":error})
    }
}

exports.create_one = async (req, res) => {
    try {
        const { description,optionA,optionB,optionC,answer } = req.body

        const question = await Question.create({
            description,
            optionA,
            optionB,
            optionC,
            answer
        })

        return res.status(201).json(question)
    } catch (error) {
        return res.status(500).json({"error":error})
    }
}

exports.update_one = async (req, res) => {
    try {
        const _id = req.params.id 
        const { description, optionA,optionB,optionC,answer } = req.body

        let question = await Question.findOne({_id})

        if(!question){
            question = await Question.create({
                description,
                optionA,
                optionB,
                optionC,
                answer
            })    
            return res.status(201).json(question)
        }else{
            question.description = description
            question.optionA = optionA
            question.optionB = optionB
            question.optionC = optionC
            question.answer = answer
            await question.save()
            return res.status(200).json(question)
        }
    } catch (error) {
        return res.status(500).json({"error":error})
    }
}

exports.delete_one = async (req, res) => {
    try {
        const _id = req.params.id 

        const question = await Question.deleteOne({_id})

        if(question.deletedCount === 0){
            return res.status(404).json({message:"successfully deleted"})
        }else{
            return res.status(204).json()
        }
    } catch (error) {
        return res.status(500).json({"error":error})
    }
}
