
const dbAccessorUser = require("../dal/db-access-user")
const { db } = require("../modules/userMongo")

//כיון שהמודול מחזיר מחלקה, צריך להקצות אותה
const dbUser = new dbAccessorUser()

class userController{

    constructor(){}

    getAll = async(req, res)=>{
        try {
            let list = await dbUser.get()
            res.status(200).json(list)
        } catch (error) {
            console.log(error)
            res.status(200)
        }
    }
    getByIndex = async(req, res)=>{
        try {
            let code = req.params.code
            let task = await dbUser.getByIndex(code)
            res.status(200).json(task)
        } catch (error) {
            throw console.log(error)
        }
    }

    add = async(req, res)=>{
        try {
            let newPres = req.body
            let data = await dbUser.add(newPres)
            res.status(200).json(data)
        } catch (error) {
            throw console.log(error)
        }
    }

    update = async(req, res)=>{
        try {
            let editPres = req.body;
            let code = editPres.id;
            let data = await dbUser.update(editPres,code)
            res.status(200).json(data)
        } catch (error) {
            throw console.log(error)
        }
    }
   


    delete = async(req, res)=>{
        try {
            let code = req.params.ind
            let data = await dbUser.delete(code)
            res.status(200).json(data)
        } catch (error) {
            throw console.log(error)
        }
    }

   

   
}


module.exports = userController

