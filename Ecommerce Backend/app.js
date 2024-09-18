const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(cors())
mongoose.connect("mongodb://localhost:27017/EcommerceBackend")
    .then("Connectedd to MDB")
    .catch(err => console.log(err))

app.use(express.json())

const routes = require('./Route/route')
app.use('/', routes)

app.listen(8000, () => console.log("Port 8000 activated"))