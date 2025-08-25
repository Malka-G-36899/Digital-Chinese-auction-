const donater = require("../modules/donaterMongo")

class dbAccessorTask {

    

    get = async()=>{
        try {
            let data = await donater.find({})
            if (data.length)
                return data;
            else    
                throw console.error("data not found")
        } catch (error) {
            throw console.error(error)
        }
    }

    getByIndex = async(codepres)=>{
        try {
            let data = await donater.find({code:codeTask})
            if (data)
                return data;
            else    
                throw console.error("data not found")
        } catch (error) {
            throw console.error(error)
        }
    }
    add = async(newDon)=>{
        try {
            await donater.create(newDon)
           return await this.get();
        } catch (error) {
            throw console.error(error)
        }
    }


    update = async(pres,ind)=>{
        try {
            await donater.updateOne({code:ind}, pres)
            return await this.get();
        } catch (error) {
            throw console.error(error)
        }
    }

    delete = async(ind)=>{
        try {
            await donater.deleteOne({id:ind})
            return await this.get();
        } catch (error) {
            throw console.error(error)
        }
    }
}
   


module.exports = dbAccessorTask