const express = require('express')
const Router = express.Router()
const {login, register, getCurrentUser} = require('../controllers/authController')
const {checkCurrentUser} = require('../middleware/checkCurrentUser')


Router.route('/').get(getCurrentUser, checkCurrentUser)
Router.route('/register').post(register)
Router.route('/login').post(login)

module.exports = Router