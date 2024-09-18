const mongoose = require('mongoose')

const loginmodel = mongoose.Schema(
    {
        name: String,
        email: String,
        pass: String
    }
)


module.exports = mongoose.model("UserDetails", loginmodel)




