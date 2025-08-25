
const express = require("express")

const userController = require("../controler/user-ctrl")
const userCtrl = new userController()
const routerUser = express.Router()

routerUser.get("/getAll", userCtrl.getAll)//
routerUser.get("/getByIndex/:index", userCtrl.getByIndex)//
routerUser.post("/add", userCtrl.add)//
routerUser.put("/update", userCtrl.update)//
routerUser.delete("/delete/:ind", userCtrl.delete)//

module.exports = routerUser