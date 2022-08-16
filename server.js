const express = require('express');
const app = express()
require('dotenv').config()
const PORT = process.env.PORT;
var morgan = require('morgan')
app.use(morgan('tiny'))
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const userRoute = require('./routes/user.route')


app.use('/', userRoute)

app.listen(PORT, () => {
    console.log('server is running ', PORT);
})


