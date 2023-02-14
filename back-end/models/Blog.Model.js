const mongoose = require('mongoose')
const blogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    like: {
        type: String,
    },
    topContent: {
        type: String,
        required: true
    },
    mainContent: {
        type: String,
        required: true
    },
    topImage:{
        type: String,
        required: true
    },
    mainImage: {
        type: String,
        required: true
    }
}, {timestamps: true})

const Blog = mongoose.model('Blog', blogSchema)
module.exports  = Blog