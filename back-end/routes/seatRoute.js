const express = require('express')
const Router = express.Router()
const {getAllSeats, createSeat, updateSeat, deleteSeat, getOneSeat}
    = require('../controllers/SeatController')
Router.route('/').get(getAllSeats)
Router.route('/:seatId&:nameId').put(updateSeat).delete(deleteSeat).get(getOneSeat)
Router.route('/:startTimeId').post(createSeat)

module.exports = Router