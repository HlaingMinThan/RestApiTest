const express=require('express');
const router=express.Router();
// get user data 
router.get('/users',(req,res)=>{
    res.send({
        type:"GET"
    });
});
// create user data 
router.post('/users',(req,res)=>{
    res.send({
        name:req.body.name,
        age:req.body.age,
        job:req.body.job
    });
});
// edit user data 
router.put('/users/:id',(req,res)=>{
    res.send({
        type:"PUT"
    });
});
// delete user data 
router.delete('/users/:id',(req,res)=>{
    res.send({
        type:"DELETE"
    });
});
module.exports=router;