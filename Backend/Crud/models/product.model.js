const mongoose = require('mongoose');


const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter the Product Name"]
    },
    quantity: {
        type: Number,
        required: true,
        default: 0
    }


});