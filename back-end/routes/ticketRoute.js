const express = require('express')
const Router = express.Router()
const {getAllTickets, createTicket, updateTicket, deleteTicket}
    = require('../controllers/ticketController')
const {verifyToken} = require('../middleware/verifyToken')

Router.route('/').get(getAllTickets).post(verifyToken, createTicket)
Router.route('/:ticketId').put(verifyToken,updateTicket).delete(verifyToken,deleteTicket)

module.exports = Router