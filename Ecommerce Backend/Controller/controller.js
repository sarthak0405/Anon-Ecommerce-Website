const ecomcontrol = require('../Model/model')

const postdata = async (req, res) => {
    const { name, email, pass } = req.body
    try {
        const data = new ecomcontrol({ name, email, pass })
        const userdata = data.save()
        res.status(200).send("Succesfully Posted")
    } catch (error) {
        console.log(error)
        res.status(200).send(error)

    }
}

const getdata = async (req, res) => {

    try {
        const data = await ecomcontrol.find()
        res.status(200).send(data)
    } catch (error) {
        console.log(error)
        res.status(200).send(error)

    }
}

const logindata = async (req, res) => {
    const { name, pass } = req.body;
    try {
        const tofind = await ecomcontrol.find({ name, pass });
        if (tofind.length === 0) {
            res.send("not exist");
        } else {
            res.send("exist");
        }
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }

}

const deletedata = async (req, res) => {
    const { name } = req.params;
    try {
        const data = await ecomcontrol.deleteOne({ name })
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

const updatedata = async (req, res) => {
    const { name, email, pass } = req.body

    try {
        // name:req.params.name
        const data = await ecomcontrol.updateOne({ name: req.params.name }, { $set: { name, email, pass } })
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





module.exports = { postdata, logindata, getdata, deletedata, updatedata }