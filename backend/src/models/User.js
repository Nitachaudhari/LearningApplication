const mongoose=require('mongoose')

const userSchema = new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    Progress:{type:Map,of:Number}
})

module.exports=mongoose.model("User",userSchema)