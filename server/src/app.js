// import node modules
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

// instantiate express
const app = express()

// set express to use HTTP request helpers
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// log message to console on Express.js start
console.log("Hello, world!");

// Server listening on PORT 8081
app.listen(process.env.PORT || 8081)