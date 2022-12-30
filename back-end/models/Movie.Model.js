const mongoose = require('mongoose')
const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name must be required']
    },
    year: {
        type: Number,
    },
    released: {
        type: String,
        required: [true, 'Released must be required']
    },
    duration: {
        type: String,
        required: [true, 'Duration must be required']
    },
    poster: {
        type: String,
        required: [true, 'Poster must be required']
    },
    director: {
        type: String,
        required: [true, 'Director must be required']
    },
    actors: [{
        type: String,
        required: [true, 'Actors must be required']
    }],
    disription: {
        type: String,
        required: [true, 'Discription must be required']
    }
}, {timestamps: true})

const Movie = mongoose.model('Movie', movieSchema)
module.exports  = Movie