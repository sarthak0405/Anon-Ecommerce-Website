const mongoose = require('mongoose')

const cartmodel = mongoose.Schema(
    {
        name: String,
        img: String,
        Category: String,
        price: Number
    }
)


module.exports = mongoose.model("cart", cartmodel)




