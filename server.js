const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()
const cors = require('cors')

const PORT = process.env.port || 5000

const routes = require('./routes/todoroute')
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("connected to mongo db")
}).catch((err)=>{
    console.log(err)
})

app.use(routes)

app.listen(PORT,()=>{console.log(`listening to the port ${PORT}`)})