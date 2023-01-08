const {Schema, model}= require('mongoose')

const cartSchema= new Schema({
    userId:{
        type:Number,
        required:true
    },
    products:[
        {productId:{
            type: Number,
            required: true
        }
    }]
})

const Cart =  model('carts', cartSchema)
module.exports=Cart