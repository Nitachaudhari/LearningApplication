const express = require('express')
// const mongoose = require('mongoose')
const userRoutes = require('./routes/userRoutes')
const lessonRoutes = require('./routes/lessonRoutes')
const cors = require('cors')
const connectDB = require('./config/db')
require('dotenv').config()

const app=express()
app.use(express.json())
app.use(cors())
connectDB()

app.get('/',(req,res)=>res.send('welcome to the kids learning'))
app.use("/api/users",userRoutes)
app.use('/api/lessons',lessonRoutes)



const PORT = process.env.PORT || 5000

app.listen(PORT,()=>console.log(`server running on ${PORT}`))