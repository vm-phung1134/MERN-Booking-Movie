const express = require('express')
const Router = express.Router()
const {getAllShowTimes, createShowTime, updateShowTime, deleteShowTime, getOneShowTime}
    = require('../controllers/showTimeController')

Router.route('/').get(getAllShowTimes).post(createShowTime)
Router.route('/:showTimeId').put(updateShowTime).delete(deleteShowTime).get(getOneShowTime)
Router.route('/:movieId').post(createShowTime)
module.exports = Router