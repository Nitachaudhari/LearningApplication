const express=require('express')
const User = require('../models/User')

const router = express.Router()

router.post('/signup',async(requestAnimationFrame,res)=>{
    try {
        const {username,email,password} =requestAnimationFrame.body
        const user = new User({username,email,password,Progress:{}})
        await user.save()
        res.json({message:"User Registered successfully"})

    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

router.get('/',async(req,res)=>{
    const users=await User.find()
    res.json(users)
})

module.exports=router