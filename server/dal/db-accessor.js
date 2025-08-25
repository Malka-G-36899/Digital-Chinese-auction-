

const ourMongo = require("mongoose")

const url = "mongodb://localhost:27017"
const dbName = "chinaSale"

const connectDB = {}

connectDB.connect = async()=>{
    try {
        await ourMongo.connect(`${url}/${dbName}`,
        {useNewUrlParser:true, useUnifiedTopology:true}
    )
        console.log("Connection successfully to mongoDB");
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB

