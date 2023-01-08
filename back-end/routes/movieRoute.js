const express = require('express')
const Router = express.Router()
const {getAllMovies, createMovie, updateMovie, deleteMovie, getOneMovie, getDetailMovie}
    = require('../controllers/movieController')

Router.route('/').get(getAllMovies)
Router.route('/detail').get(getDetailMovie)
Router.route('/:movieId').put(updateMovie).delete(deleteMovie).get(getOneMovie)
Router.route('/:cinemaId').post(createMovie)

module.exports = Router