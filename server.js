const connection = require("./db")
const express = require("express")
const app = express()
const route = require("./routes/getArrayRoute")
const cors = require("cors")
app.use(cors())
connection()

app.use(express.json());

app.use("/gett", route)



app.listen(9000, () => {
    console.log("listening")
})




