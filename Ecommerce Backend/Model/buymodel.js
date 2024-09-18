const mongoose = require('mongoose')

const buymodel = mongoose.Schema(
    {
        name: String,
        img: String,
        Category: String,
        price: Number
    }
)


module.exports = mongoose.model("buy", buymodel)




