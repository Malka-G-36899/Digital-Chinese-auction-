const express = require("express")

const donateController = require("../controler/donater-ctrl")
const donaterCtrl = new donateController()

const routerDonater = express.Router()

routerDonater.get("/get", donaterCtrl.get)//
routerDonater.get("/getByIndex/:code", donaterCtrl.getByIndex)//
routerDonater.post("/add", donaterCtrl.add)//
routerDonater.put("/update", donaterCtrl.update)//
routerDonater.delete("/delete/:code", donaterCtrl.delete)//

module.exports = routerDonater