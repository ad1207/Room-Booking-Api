const express = require("express")
const mongo = require("./shared/connect")
const roomRouter = require("./routes/room")
const customer = require("./routes/customer")
const dotenv = require("dotenv")

dotenv.config()
const app = express()
app.use(express.json())
mongo.connect()

app.use("/room",roomRouter)
app.use("/customer",customer)



app.listen(process.env.PORT)

