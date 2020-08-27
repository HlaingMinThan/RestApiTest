const express=require('express');
const router=express.Router();

// Import User Model
const User=require('../models/user');
// get user data 
router.get('/users',(req,res)=>{
    res.send({
        type:"GET"
    });
});
// create user data 
router.post('/users',(req,res)=>{
    User.create(req.body).then(user=>{
        res.send(user);
    });
});
// edit user data 
router.put('/users/:id',(req,res)=>{
   User.findByIdAndUpdate({_id:req.params.id},req.body).then(()=>{
       User.findOne({_id:req.params.id}).then((user)=>{
           res.send(user);
       })
   })
});
// delete user data 
router.delete('/users/:id',(req,res)=>{
   User.findByIdAndDelete({_id:req.params.id}).then((user)=>{
        res.send(user);
   });
});
module.exports=router;