const express = require('express');
const { createNewAccount } = require('../controllers/auth.controller');
const route = express.Router()

route.post('/register', createNewAccount)

module.exports = route