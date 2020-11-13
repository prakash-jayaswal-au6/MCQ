const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user');
const dotenv = require('dotenv');
dotenv.config();


router.post('/register', UserController.register_user);
    
router.post('/login',UserController.login_user);

module.exports = router;