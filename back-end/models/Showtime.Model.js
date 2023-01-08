const mongoose = require('mongoose')
const showTimeSchema = new mongoose.Schema({
    typeMovie: { // thể loại phim chiếu
        type: String,
        required: true,
        trim: true
    },
    startTime: [{ // giờ chiếu
        type: String,
        required: true,
        trim: true,
        unique: true,
    }],
    startDate: { // ngày chiếu
        type: String,
        required: true,
        trim: true
    },
    movieId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie'
    },

}, {timestamps: true})

const ShowTime = mongoose.model('ShowTime', showTimeSchema)
module.exports  = ShowTime