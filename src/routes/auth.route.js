const express = require('express');
const { createNewAccount, loginAccount, updateInfoAccount } = require('../controllers/auth.controller');
const passportConfig = require('../middlewares/passport.middleware')
const passport = require('passport');
const route = express.Router()
// Đăng kí 
route.post('/register', createNewAccount)
// Đăng nhập
route.post('/login', loginAccount)
// Chỉnh sửa thông tin tài khoản
route.post('/update', passport.authenticate('jwt', { session: false }), updateInfoAccount)

module.exports = route