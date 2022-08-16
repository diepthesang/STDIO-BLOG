const express = require('express');
const app = express()
require('dotenv').config()
var morgan = require('morgan')
app.use(morgan('tiny'))
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const userRoute = require('./src/routes/user.route')
const authRoute = require('./src/routes/auth.route')


app.use('/', userRoute)
app.use('/auth', authRoute)

app.listen(process.env.PORT, () => {
    console.log('server is running ', process.env.PORT);
})


