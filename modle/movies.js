const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    movieName: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    movieGener: [],
    movieCertificate: {
        type: String,
        required: true
    },
    aboutMovie: {
        type: String,
        require: true
    },
    imageUrl: []

})

const movieModel = mongoose.model('movies', movieSchema)

module.exports = movieModel;