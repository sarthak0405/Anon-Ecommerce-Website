const cartcontroller = require('../Model/cartmodel')

const getcart = async (req, res) => {

    try {
        const data = await cartcontroller.find()
        res.status(200).send(data)
    } catch (error) {
        console.log(error)
        res.status(200).send(error)

    }
}


const postcart = async (req, res) => {
    const { name, img, Category, price } = req.body
    try {
        const data = new cartcontroller({ name, img, Category, price })
        const userdata = data.save()
        res.status(200).send("Succesfully Posted")
    } catch (error) {
        console.log(error)
        res.status(200).send(error)

    }
}

const deletecart = async (req, res) => {
    const { name } = req.params;
    try {
        const data = await cartcontroller.deleteOne({ name })
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

module.exports = { getcart, postcart, deletecart }