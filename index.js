const express=require('express');
const app=express();

// set up route
app.use('/api',require('./routes/api'));
// express app listen event at localhost:4000
app.listen(5000,()=>{
    console.log('event start listening');
})