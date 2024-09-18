const menmod = require('../Model/mensmodel')

const getmen = async (req, res) => {

    try {
        const data = await menmod.find()
        res.status(200).send(data)
    } catch (error) {
        console.log(error)
        res.status(200).send(error)

    }
}

const deletemen = async (req, res) => {
    const { name } = req.params;
    try {
        const data = await menmod.deleteOne({ name })
        if (data.deletedCount > 0) {
            res.send("Deleted")
            res.status(200).send(console.log("Deleted Successfully"))

        } else {
            res.send("Not Deleted")
            res.status(400).send(console.log("Error"))
        }

    } catch (error) {
        console.log(error)
        // res.status(200).send(error)

    }
}

const postmen = async (req, res) => {
    const { name, img, Category, price } = req.body
    try {
        const data = new menmod({ name, img, Category, price })
        const userdata = data.save()
        res.status(200).send("Succesfully Posted")
    } catch (error) {
        console.log(error)
        res.status(200).send(error)

    }
}

const updatemen = async (req, res) => {
    const { name, Category, price, img } = req.body

    try {
        // name:req.params.name
        const data = await menmod.updateOne({ name: req.params.name }, { $set: { name, Category, price, img } })
        if (data.modifiedCount > 0) {
            res.send("Updated")
            res.status(200).send(console.log("Data"))
        } else {
            res.send("Error")
            res.status(300).send(console.log("error"))
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = { getmen, deletemen, postmen, updatemen }