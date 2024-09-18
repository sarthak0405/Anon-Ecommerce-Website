const buy = require('../Model/buymodel')

const postbuy = async (req, res) => {
    const { name, img, Category, price } = req.body
    try {
        const data = new buy({ name, img, Category, price })
        const userdata = data.save()
        res.status(200).send("Succesfully Posted")
    } catch (error) {
        console.log(error)
        res.status(200).send(error)

    }
}

const getbuy = async (req, res) => {

    try {
        const data = await buy.find()
        res.status(200).send(data)
    } catch (error) {
        console.log(error)
        res.status(200).send(error)

    }
}

module.exports = { postbuy, getbuy }