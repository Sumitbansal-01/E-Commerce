const dotenv = require('dotenv').config()
const express= require('express')
const app= express()
app.use(express.json())
const mongoose = require('mongoose')
require("./database/connection")

app.listen(process.env.PORT,()=>{
    console.log('App is listening on Port', process.env.PORT)
})