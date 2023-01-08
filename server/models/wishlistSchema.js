const {Schema, model}= require('mongoose')
const wishlistSchema= new Schema({
    userId:{
        type:Number,
        required: true
    },
    name:{
        type:String,
        required:true
    },
    products:[
        {
            productId:{
                type: Number,
                required: true
            }
        }
    ]
})

const Wishlist= model('whishlists', wishlistSchema)
module.exports=Wishlist