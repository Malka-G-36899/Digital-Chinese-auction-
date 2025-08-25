const myexpress = require("express")
const db  = require("./dal/db-accessor")
const presentCtrl = require("./router/present-router")
const donaterCtrl = require("./router/torem-router")
const userCtrl= require("./router/user-router")
const app = myexpress()

const cors = require('cors');

app.use(myexpress.urlencoded({extends:true}))
app.use(myexpress.json())

app.use(cors({
    origin: '*'
}));
//חיבור ל DB
const init = async()=>{
    await db.connect()
}

init()

//יצירת שרת
const hostname="localhost"
const port = 5000
app.listen(port, hostname, ()=>{
    console.log(`Server running at ${hostname}:${port}`);
})

app.use("/user",userCtrl)
app.use("/donater",donaterCtrl )
app.use("/present",presentCtrl )

