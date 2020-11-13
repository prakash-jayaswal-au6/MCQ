const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const questionController = require('../controllers/question')

// get all MCQ DATA 
router.get('/questions', questionController.get_all)

// get one MCQ DATA
router.get('/questions/:id', questionController.get_one)

// create one MCQ DATA
router.post('/questions',auth, questionController.create_one)

// update one MCQ DATA
router.put('/questions/:id',auth, questionController.update_one)

// delete one MCQ DATA
router.delete('/questions/:id',auth, questionController.delete_one)

module.exports = router