const express = require("express")

const presentController = require("../controler/present-ctrl")
const presentCtrl = new presentController()

const routerPresent = express.Router()
routerPresent.get("/getAll", presentCtrl.getAll)//
routerPresent.get("/getByIndex/:index", presentCtrl.getByIndex)//
routerPresent.post("/add", presentCtrl.add)//
routerPresent.put("/update", presentCtrl.update)//
routerPresent.delete("/delete/:code", presentCtrl.delete)//
module.exports = routerPresent


