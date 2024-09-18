const mongoose = require('mongoose')

const electronicsmodel = mongoose.Schema(
    {
        name: String,
        price: Number,
        img: String,
        Category: String
    }
)


module.exports = mongoose.model("electronics", electronicsmodel)




