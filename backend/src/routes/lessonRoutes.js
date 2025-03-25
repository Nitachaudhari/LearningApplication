const express =require('express')
const Lesson = require('../models/Lesson')

const router = express.Router()

router.post('/add-lesson',async(req,res)=>{
    try {
        const lesson=new lesson(req.body)
        await lesson.save()
        res.json({message:"Lesson added successfully"})

    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

router.get('/',async(req,res)=>{
    const lessons= await Lesson.find()
    res.json(lessons)
})

module.exports=router