const express = require('express')
const Router = express.Router()
const {getAllMovies, createMovie, updateMovie, deleteMovie, getOneMovie}
    = require('../controllers/movieController')

Router.route('/').get(getAllMovies).post(createMovie)
Router.route('/:movieId').put(updateMovie).delete(deleteMovie).get(getOneMovie)

module.exports = Router