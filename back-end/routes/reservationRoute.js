const express = require('express')
const Router = express.Router()
const {getAllReservations, createReservation, updateReservation, deleteReservation}
    = require('../controllers/reservationController')
const {verifyToken} = require('../middleware/verifyToken')

Router.route('/').get(getAllReservations).post(verifyToken, createReservation)
Router.route('/:reservationId').put(verifyToken,updateReservation).delete(verifyToken,deleteReservation)

module.exports = Router