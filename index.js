require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./Routes/router')
require('./DB/connection')

//create an express app
const mtServer = express()

//use cors in express server
mtServer.use(cors())
mtServer.use(express.json())
mtServer.use(router)

const PORT = 3000 || process.env.PORT

mtServer.listen(PORT, () => {
  console.log(`server started at PORT : ${PORT}`);
})

