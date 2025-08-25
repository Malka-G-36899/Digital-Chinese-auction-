const user = require("../modules/userMongo")

class dbAccessorUser {

   
    get = async()=>{
        try {
            let data = await user.find({})
            //if (data.length)
                return data;
            // else    
            //     {
            //          console.error("data not found")
            //         return []
            // }
        } catch (error) {
            console.error(error)
        }
    }

    getByIndex = async(number)=>{
        try {
            let data = await user.find({})
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
            await user.create(newPres)
           return await this.get();
        } catch (error) {
            throw console.error(error)
        }
    }


    update = async(pres,ind)=>{
        try {
            await user.updateOne({id:ind}, pres)
            return await   this.get()
        } catch (error) {
            throw console.error(error)
        }
    }

    delete = async(ind)=>{
        try {
            await user.deleteOne({id:ind})
            return await   this.get()
        } catch (error) {
            throw console.error(error)
        }
    }
}

module.exports = dbAccessorUser