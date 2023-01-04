const express = require('express')
const Router = express.Router()
const {login, register, getCurrentUser, logout} = require('../controllers/authController')
const {checkCurrentUser} = require('../middleware/checkCurrentUser')


Router.route('/').get(getCurrentUser, checkCurrentUser)
Router.route('/register').post(register)
Router.route('/login').post(login)
Router.route('/logout').get(logout)

module.exports = Router