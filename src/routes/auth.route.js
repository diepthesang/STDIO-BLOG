const express = require('express');
const { createNewAccount, loginAccount, updateInfoAccount } = require('../controllers/auth.controller');
const route = express.Router()

route.post('/register', createNewAccount)
route.post('/login', loginAccount)
route.post('/update', updateInfoAccount)

module.exports = route