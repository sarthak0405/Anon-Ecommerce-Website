const ecomroute = require('../Controller/controller')
const menroute = require('../Controller/menscontroller')
const womenroute = require('../Controller/womencontroller')
const adminroute = require('../Controller/admincontroller')
const cartroute = require('../Controller/cartcontroller')
const buyroute = require('../Controller/buycontroller')
const kidroute = require('../Controller/kidscontroller')
const electronicsroute = require('../Controller/electronicscontroller')
const perfumeroute = require('../Controller/perfumecontroller')
const express = require('express')
const route = express.Router()

route.get("/getdata", ecomroute.getdata)
route.post("/postdata", ecomroute.postdata)
route.post("/logindata", ecomroute.logindata)
route.delete("/deletedata/:name", ecomroute.deletedata)
route.put("/updatedata/:name", ecomroute.updatedata)

// Menn

route.get("/getmen", menroute.getmen)
route.post("/postmen", menroute.postmen)
route.delete("/deletemen/:name", menroute.deletemen)
route.put("/updatemen/:name", menroute.updatemen)

// Women

route.get("/getwomen", womenroute.getwomen)
route.post("/postwomen", womenroute.postwomen)
route.delete("/deletewomen/:name", womenroute.deletewomen)
route.put("/updatewomen/:name", womenroute.updatewomen)

//kid
route.get("/getkid", kidroute.getkid)
route.post("/postkid", kidroute.postkid)
route.delete("/deletekid/:name", kidroute.deletekid)
route.put("/updatekid/:name", kidroute.updatekid)

//electronics
route.get("/getelectronics", electronicsroute.getelectronics)
route.post("/postelectronics", electronicsroute.postelectronics)
route.delete("/deleteelectronics/:name", electronicsroute.deleteelectronics)
route.put("/updateelectronics/:name", electronicsroute.updateelectronics)

//perfume
route.get("/getperfume", perfumeroute.getperfume)
route.post("/postperfume", perfumeroute.postperfume)
route.delete("/deleteperfume/:name", perfumeroute.deleteperfume)
route.put("/updateperfume/:name", perfumeroute.updateperfume)


// Admin Model

route.post("/adminlogin", adminroute.loginadmin)


//Cart Controller

route.post("/postcart", cartroute.postcart)
route.get("/getcart", cartroute.getcart)
route.delete("/cart/:name", cartroute.deletecart)

//BUY ROUTE
route.post("/buy", buyroute.postbuy)
route.get("/getbuy", buyroute.getbuy)


module.exports = route