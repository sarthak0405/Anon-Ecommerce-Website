const mongoose = require('mongoose')

const adminmodel = mongoose.Schema(
    {
        name: String,
        password: String
    }
)


module.exports = mongoose.model("admin", adminmodel)




