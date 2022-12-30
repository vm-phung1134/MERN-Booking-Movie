const Movie = require('../models/Movie.Model.js')

exports.getAllMovies = async (req, res, next) => {
    try {
        const movies = await Movie.find({}).populate('author').populate('movie')
        res.status(200).json({
            status: 'success',
            results: movies.length,
            data: {movies}
        })
    } catch (error) {
        res.json(error)
    }
}

exports.createMovie = async (req, res, next) => {
    try {
        const {userId} = req.user;
        const movie = await Movie.create({...req.body, author: userId})
        res.status(200).json({
            status: 'success',
            data: {movie}
        })
    } catch (error) {
        res.json(error)
    }
}

exports.updateMovie = async (req, res, next) => {
    try {
        const {MovieId} = req.params;
        const movie = await Movie.findByIdAndUpdate(MovieId,{...req.body},{new: true, runValidator: true})
        res.status(200).json({
            status: 'success',
            data: {movie}
        })
    } catch (error) {
        res.json(error)
    }
}

exports.deleteMovie = async (req, res, next) => {
    try {
        const {movieId} = req.params;
        await Movie.findByIdAndDelete(movieId)
        res.status(200).json({
            status: 'success',
            message: 'Movie has been deleted'
        })
    } catch (error) {
        res.json(error)
    }
}