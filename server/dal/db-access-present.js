const present = require("../modules/presentMongo")

class dbAccessorPresent {

   
    get = async()=>{
        try {
            let data = await present.find({})
            if (data.length)
                return data;
            else    
                throw console.error("data not found")
        } catch (error) {
            throw console.error(error)
        }
    }

    getByIndex = async(number)=>{
        try {
            let data = await present.find({})
            if (data[number])
                return data[number];
            else    
                throw console.error("data not found")
        } catch (error) {
            throw console.error(error)
        }
    }

    add = async(newPres)=>{
        try {
            await present.create(newPres)
           return await this.get();
        } catch (error) {
            throw console.error(error)
        }
    }


    update = async(pres)=>{
        try {
            await present.updateOne({id:pres.id}, pres)
            return await this.get();
        } catch (error) {
            throw console.error(error)
        }
    }

    delete = async(ind)=>{
        try {
            await present.deleteOne({id:ind})
            return await this.get();
        } catch (error) {
            throw console.error(error)
        }
    }
}

module.exports = dbAccessorPresent
