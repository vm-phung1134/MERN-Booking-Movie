const mongoose = require('mongoose')
const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name must be required']
    },
    namevn:{
        type: String
    },
    year: {
        type: Number,
    },
    country: {
        type: String
    },
    type:{
        type: String
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
    image: {
        type: String,
        required: [true, 'Image must be required']
    },
    director: {
        type: String,
        required: [true, 'Director must be required']
    },
    limitAge: {
        type: String,
        required: true,
    },
    actors: [{
        type: String,
        required: [true, 'Actors must be required']
    }],
    discription: {
        type: String,
        required: [true, 'Discription must be required']
    },
    cinemaId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    }
}, {timestamps: true})

const Movie = mongoose.model('Movie', movieSchema)
module.exports  = Movie