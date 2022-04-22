const express = require('express');
const router = express.Router();

const Movies = require('../modle/movies');

router.get('/getallmovies', async (req, res, next) => {



    try {
        const movies = await Movies.find();
        res.send({ movies })


    } catch (err) {
        res.status(400).send(err)

    }

})

router.post('/getmoviebyid', async (req, res, next) => {

    const movieId = req.body.movieId;


    try {
        const movie = await Movies.find({ _id: movieId });
        res.send({ movie })

    } catch (err) {
        res.status(400).send(err)

    }

})

module.exports = router;