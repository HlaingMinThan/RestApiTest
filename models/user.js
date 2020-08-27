const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const UserSchema=new Schema({
    name:{
        type:String,
        required:[true,"Name Field is required"]
    },
    age:{
        type:Number,
        required:[[true,"Age Field is required"]]
    },
    available:{
        type:Boolean,
        default:false
    }
})

// export model
const User=mongoose.model('usersCollection',UserSchema);
module.exports=User;