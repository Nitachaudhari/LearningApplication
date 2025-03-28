const { response } = require('express')
const mongoose=require('mongoose')
require('dotenv').config()

const connectDB= async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("connection successful")

    } catch (error) {
        console.log("connection failed",error)
    }
}  


module.exports = connectDB