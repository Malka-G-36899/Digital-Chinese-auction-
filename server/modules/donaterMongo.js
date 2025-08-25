const ourMongo = require("mongoose")

const donaterSchema = new ourMongo.Schema(
    {
        code:Number,
        id:String,
        name: String
    }
)
const donater = ourMongo.model("donaters", donaterSchema, "donaters")

module.exports = donater

