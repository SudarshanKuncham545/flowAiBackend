const express = require("express")
const dotEnv = require("dotenv")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors");
const studentRoutes = require('./routes/studentRoutes')

const app = express()

const port = process.env.port || 5000

dotEnv.config()

app.use(bodyParser.json())

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("MongoDB connected successfully")
})
.catch((error)=>{
    console.log(`${error}`)
})

app.use('/students', studentRoutes)

app.listen(port, ()=>{
    console.log(`server started successfully at ${port}`)
})

app.use('/', (req, res)=>{
    res.send("<h1> Welcome to FlowAI")
})