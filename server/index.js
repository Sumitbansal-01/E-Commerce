const dotenv = require('dotenv').config()
const express= require('express')
const app= express()
app.use(express.json())
const mongoose = require('mongoose')
require("./database/connection")

app.use("/api/",require("./router/user"))

app.get("/", (req, res) => {
    res.send('Checking Get Method')

})


app.listen(process.env.PORT,()=>{
    console.log('App is listening on Port', process.env.PORT)
})