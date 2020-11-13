const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const app = express();
dotenv.config();
require('./config/database')
const cors = require('cors')

app.use(cors())
const userRoutes = require('./routes/user')
const questionRoutes = require('./routes/question')



//body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

const port = process.env.PORT || 8080


app.use('/api',userRoutes);
app.use('/api',questionRoutes);



//Error hndleres
app.use((req,res,next) => {
    const error = new Error('Not Found');
    error.status=404;
    next(error);
})
//Error handler for DAtabae
app.use((error,req,res,next) => {
    res.status(error.status || 500);
    res.json({
        error:{
            message:error.message
        }
    })
})


app.listen(port,function(){
    console.log(`server is running on port no : ${port}`)
})

module.exports = app ;