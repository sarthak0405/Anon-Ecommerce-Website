const mongoose = require('mongoose')

const mensmodel = mongoose.Schema(
    {
        name: String,
        price: Number,
        img: String,
        Category: String
    }
)


module.exports = mongoose.model("Mens", mensmodel)




