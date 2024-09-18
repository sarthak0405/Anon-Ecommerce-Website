const perfumemod = require('../Model/perfumemodel')

const getperfume = async (req, res) => {

    try {
        const data = await perfumemod.find()
        res.status(200).send(data)
    } catch (error) {
        console.log(error)
        res.status(200).send(error)

    }
}

const deleteperfume = async (req, res) => {
    const { name } = req.params;
    try {
        const data = await perfumemod.deleteOne({ name })
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

const postperfume = async (req, res) => {
    const { name, img, Category, price } = req.body
    try {
        const data = new perfumemod({ name, img, Category, price })
        const userdata = data.save()
        res.status(200).send("Succesfully Posted")
    } catch (error) {
        console.log(error)
        res.status(200).send(error)

    }
}

const updateperfume = async (req, res) => {
    const { name, Category, price, img } = req.body

    try {
        // name:req.params.name
        const data = await perfumemod.updateOne({ name: req.params.name }, { $set: { name, Category, price, img } })
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

module.exports = { getperfume, deleteperfume, postperfume, updateperfume }