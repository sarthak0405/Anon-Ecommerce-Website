const adminmodel = require('../Model/adminmodel')

const loginadmin = async (req, res) => {
    const { name, password } = req.body;
    try {
        const tofind = await adminmodel.find({ name, password });
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

module.exports = { loginadmin }