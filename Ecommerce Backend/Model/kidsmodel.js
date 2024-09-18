const mongoose = require('mongoose')

const kidsmodel = mongoose.Schema(
    {
        name: String,
        price: Number,
        img: String,
        Category: String
    }
)


module.exports = mongoose.model("kids", kidsmodel)




