const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = express.Router();
//const PORT = 4000;
const serverless= require('serverless-http');

//For middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

//mongoose.connect('mongodb://127.0.0.1:27017/RaithaSethu', { useNewUrlParser: true , useUnifiedTopology: true,});
mongoose.connect('mongodb+srv://dbuser:Ka14@cluster0.eowjo.mongodb.net/E-Agri?retryWrites=true&w=majority', { useNewUrlParser: true , useUnifiedTopology: true,});

const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})
const userRouter = require('./routes/Farmer.route');
app.use('/.netlify/functions/server',userRouter);

//app.listen(PORT,()=>{
 //   console.log("Server is running on port: " + PORT);
//})

//Api routes
//const userRouter = require('./routes/Farmer.route');
//app.use('/users',userRouter);


module.exports =app;
module.exports.handler =serverless(app);