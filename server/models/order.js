const {Schema, model}= require('mongoose')

const orderSchema= new Schema({
    userId:{
        type:String,
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
    },
    email: {
        type: Number,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    paymentMethod:{
        type: String,
        required: true
    },
    paymentDone:{
        type: String,
        required: true
    },
    products: [
        {
            productId :{
                type: Number,
                required: true
            },
            quantity: {
                type: String,
                required : true
            }
        }
    ]
})

const Order= model('Orders', orderSchema )
module.exports= Order