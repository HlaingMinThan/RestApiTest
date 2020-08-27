const express=require('express');
const bodyParser=require('body-parser');

const app=express();

// access public file for frontend page
app.use(express.static('public'));
// connect mongodb
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/userData');
mongoose.Promise=global.Promise;
// use bodyparser middleware before run route code to show json format code in post method response 
app.use(bodyParser.json());
// set up route
app.use('/api',require('./routes/api'));
// express app listen event at localhost:4000
app.listen(5000,()=>{
    console.log('event start listening');
})