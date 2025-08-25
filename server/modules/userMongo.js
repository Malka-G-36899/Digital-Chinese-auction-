const ourMongo = require("mongoose")
const userSchema = new ourMongo.Schema(
    {
        id:Number,
        name: String,
        phone:String
    }
)
const user = ourMongo.model("user", userSchema, "user")

module.exports = user