const mongoose = require('mongoose')

const womenmodel = mongoose.Schema(
    {
        name: String,
        price: Number,
        img: String,
        Category: String
    }
)


module.exports = mongoose.model("womens", womenmodel)




