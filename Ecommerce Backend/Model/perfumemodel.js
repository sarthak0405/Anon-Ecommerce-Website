const mongoose = require('mongoose')

const perfumemodel = mongoose.Schema(
    {
        name: String,
        price: Number,
        img: String,
        Category: String
    }
)


module.exports = mongoose.model("perfume", perfumemodel)




