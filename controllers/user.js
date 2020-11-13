const User = require('../models/user')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


//const nodemailer = require('nodemailer')
const dotenv = require('dotenv')
dotenv.config();



exports.register_user = (req,res) => {
    //make sure that user not exist already in database
    User.find({email:req.body.email}).exec().then(user => {
        if(user.length >= 1){
            return res.status(409).json({message:"user already exist can't register"});
        } else {
            bcrypt.hash(req.body.password,10,(err,hash) => {
                if(err) {
                    return res.status(500).json({error:err});
                } else {
                    
                    let newUser = new User({
                        name:req.body.name,
                        email:req.body.email,
                        password: hash
                    });
                   
                    newUser.save().then(response => {
                        console.log(response);
                            
                                res.status(201).json({message:"user registered",User:response})
                               
                        }).catch(err => {
                            console.log(err);
                            res.status(500).json({error:err});
                        });   
                }
            })
        }
    }).catch();   
}


exports.login_user = (req,res,next) => {
    const email = req.body.email;
    const password = req.body.password;
    
    User.find({email:email}).exec().then(user => {
        if(user.length < 1){
            return res.status(401).json({message:"User Doesn't Exist"});
        }
        bcrypt.compare(password, user[0].password,(err,isMatch) => {
            if(err) {
               return res.status(401).json({message:"Authentication Failed"});
            } 
            //if password are matched
            if(isMatch){
                const token = jwt.sign({email: user[0].email, userId: user[0]._id},process.env.secretKey,{expiresIn:500000});
                return res.status(200).json({message:"Authentication successful",Token : token,Id: user[0]._id })
            }
           
            res.status(401).json({message:"Authentication Failed"});
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error:err});
    });
}

