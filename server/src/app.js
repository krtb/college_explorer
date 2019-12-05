// import node modules
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
var axios = require('axios');
// Add dotenv for use of ENV vars for local development
require('dotenv').config()

// instantiate express
const app = express()

// set express to use HTTP request helpers
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// display JSON msg to route /hello, on Express.js start
app.get('/hello', (req, res) => {
    res.send(
        [
            {
            message: "Hello World",
            about: "Hi there! This is the college_explorer app!"
            }
        ]
    )
})

//display colleges that offer bachelor's degree in education
app.get('/schools', (req, res) => {
    axios.get(`${process.env.VUE_APP_COLLEGE_SCORECARD_API + process.env.VUE_APP_COLLEGE_SCORECARD_API_KEY}`)
            .then(data => res.send(data.data.results))
            .catch(err => res.send(err));
})

// Server listening on PORT 8081
app.listen(process.env.PORT || 8081)

// Display message to console on server start up
console.log("Hello, world!");