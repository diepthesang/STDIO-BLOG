const express = require('express');
const route = express.Router()

route.get('/status', (req, res, next) => {
    res.json({
        message: 'hello nekd'
    })
})

module.exports = route