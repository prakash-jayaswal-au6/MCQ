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
        const { question, options, answers,category } = req.body
        const questionDetail = await Question.create({
            question,
            options,
            answers,
            category,
            postedBy:req.userData.userId
        })
        //  console.log(typeof(questionDetail))
        return res.status(201).json(questionDetail)
    } catch (error) {
        return res.status(500).json({"error":error})
    }
}



exports.delete_one = async (req, res) => {
    try {
        const _id = req.params.id 

        const mcq = await Question.deleteOne({_id})

        if(mcq.deletedCount === 0){
            return res.status(404).json({message:"successfully deleted"})
        }else{
            return res.status(204).json()
        }
    } catch (error) {
        return res.status(500).json({"error":error})
    }
}
