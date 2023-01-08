const {Schema, model} = require('mongoose')
const bcrypt= require('bcrypt')

const userSchema= new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    landmark: {
        type: String,
        required: false
    },
    pincode: {
        type: Number,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    }
})

userSchema.pre('save', async function (next) {
    this.password=await bcrypt.hash(this.password,12)
    next()
})

const User= model('USERS', userSchema)
module.exports =User