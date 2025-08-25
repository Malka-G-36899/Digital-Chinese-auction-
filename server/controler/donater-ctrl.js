
const dbAccessorDonater = require("../dal/db-access-donater")
const { db } = require("../modules/donaterMongo")


const dbDonater = new dbAccessorDonater()

class donaterController{

    constructor(){}

    get= async(req, res)=>{
        try {
            let list = await dbDonater.get()
            res.status(200).json(list)
        } catch (error) {
            throw console.log(error)
        }
    }

    getByIndex = async(req, res)=>{
        try {
            let code = req.params.code
            let category = await dbDonater.getByIndex()
            res.status(200).json(category)
        } catch (error) {
            throw console.log(error)
        }
    }
    add = async(req, res)=>{
     try {
            let newPres = req.body
            let data = await dbDonater.add(newPres)
            res.status(200).json(data)
        } catch (error) {
            throw console.log(error)
        }
    }

    update = async(req, res)=>{
        try {
            let editPres = req.body;
            let code =editPres.code;
            let data = await dbDonater.update(editPres,code)
            res.status(200).json(data)
        } catch (error) {
            throw console.log(error)
        }
    }
   


    delete = async(req, res)=>{
        try {
            let code = req.params.code
            let data = await dbDonater.delete(code)
            res.status(200).json(data)
        } catch (error) {
            throw console.log(error)
        }
    }

}


module.exports = donaterController

