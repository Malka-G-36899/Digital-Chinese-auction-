const ourMongo = require("mongoose")
const presentSchema = new ourMongo.Schema(
    {
        id: Number,
        name: String,
        donater: String,
        price: Number,
        users:[String],
        winner:Number
    }
)
const present = ourMongo.model("presents", presentSchema, "presents")

module.exports = present

