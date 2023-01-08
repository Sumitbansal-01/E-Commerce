const {Schema, model} = require("mongoose")
const productSchemas = new Schema ({
    title : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    category : {
        type: String,
        required: true
    },
    subCategory : {
        type: String,
        required: true
    },
    mrp: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    productImages: [
        {
            imageUrl: {
                type: String,
                required: true
            }
        }
    ],
    reviews: [
        {
            review: {
                type: String,
                required: false
            }
        }
    ]

})

const Meeting= model('Products', productSchemas)
module.exports=Meeting