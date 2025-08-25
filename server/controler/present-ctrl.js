
const dbAccessorPresent = require("../dal/db-access-present")
const { db } = require("../modules/presentMongo")

//כיון שהמודול מחזיר מחלקה, צריך להקצות אותה
const dbPresent = new dbAccessorPresent()

class presentController{

    constructor(){}

    getAll = async(req, res)=>{
        try {
            let list = await dbPresent.get()
            res.status(200).json(list)
        } catch (error) {
            throw console.log(error)
        }
    }
    getByIndex = async(req, res)=>{
        try {
            let code = req.params.code
            let task = await dbPresent.getByIndex(code)
            res.status(200).json(task)
        } catch (error) {
            throw console.log(error)
        }
    }

    add = async(req, res)=>{
        try {
            let newPres = req.body
            let data = await dbPresent.add(newPres)
            res.status(200).json(data)
        } catch (error) {
            throw console.log(error)
        }
    }

    update = async(req, res)=>{
        try {
            let editPres = req.body;
            let data = await dbPresent.update(editPres)
            res.status(200).json(data)
        } catch (error) {
            throw console.log(error)
        }
    }
   


    delete = async(req, res)=>{
        try {
            let code = req.params.code
            let data = await dbPresent.delete(code)
            res.status(200).json(data)
        } catch (error) {
            throw console.log(error)
        }
    }

   

   
}


module.exports = presentController

