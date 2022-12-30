const express = require('express')
const Router = express.Router()
const {getAllMovies, createMovie, updateMovie, deleteMovie}
    = require('../controllers/movieController')
const {verifyToken} = require('../middleware/verifyToken')

Router.route('/').get(getAllMovies).post(verifyToken, createMovie)
Router.route('/:movieId').put(verifyToken,updateMovie).delete(verifyToken,deleteMovie)

module.exports = Router