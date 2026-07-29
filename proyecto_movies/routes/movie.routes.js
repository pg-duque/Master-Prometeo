const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

// 1. OBTENER TODAS LAS PELÍCULAS 
router.get('/', async (req, res, next) => {
    try {
        const movies = await Movie.find();
        return res.status(200).json(movies);
    } catch (err) {
        return next(err);
    }
});

// 2. OBTENER PELÍCULA POR ID 
router.get('/id/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        const movie = await Movie.findById(id);
        if (movie) {
            return res.status(200).json(movie);
        } else {
            return res.status(404).json('No movie found by this id');
        }
    } catch (err) {
        return next(err);
    }
});

// 3. OBTENER PELÍCULA POR TÍTULO 
router.get('/title/:title', async (req, res, next) => {
    const { title } = req.params;
    try {
        // Usamos RegExp con la opción 'i' (case-insensitive)
        const movieByTitle = await Movie.find({ title: new RegExp(title, 'i') });
        return res.status(200).json(movieByTitle);
    } catch (err) {
        return next(err);
    }
});

// 4. OBTENER PELÍCULAS POR GÉNERO 
router.get('/genre/:genre', async (req, res, next) => {
    const { genre } = req.params;
    try {
        const movieByGenre = await Movie.find({ genre: new RegExp(genre, 'i') });
        return res.status(200).json(movieByGenre);
    } catch (err) {
        return next(err);
    }
});

// 5. OBTENER PELÍCULAS POR AÑO 
router.get('/year/:year', async (req, res, next) => {
    const { year } = req.params;
    try {
        // Cambiamos $gt por $gte para que encuentre las pelis de ese año en adelante
        const movieByYear = await Movie.find({ year: { $gte: Number(year) } });
        return res.status(200).json(movieByYear);
    } catch (err) {
        return next(err);
    }
});

// 6. CREAR UNA NUEVA PELÍCULA 
router.post('/', async (req, res, next) => {
    try {
        const newMovie = new Movie({
            title: req.body.title,
            director: req.body.director,
            year: req.body.year,
            genre: req.body.genre
        });

        const createdMovie = await newMovie.save();
        return res.status(201).json(createdMovie);
    } catch (err) {
        return next(err);
    }
});

// 7. EDITAR/MODIFICAR UNA PELÍCULA 
router.put('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const movieModify = new Movie(req.body);
        
        // Conservamos el mismo ID original
        movieModify._id = id;

        const movieUpdated = await Movie.findByIdAndUpdate(id, movieModify, { new: true });
        
        if (!movieUpdated) {
            return res.status(404).json('Movie not found to update');
        }

        return res.status(200).json(movieUpdated);
    } catch (err) {
        return next(err);
    }
});

// 8. ELIMINAR UNA PELÍCULA 
router.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const movieDeleted = await Movie.findByIdAndDelete(id);

        if (!movieDeleted) {
            return res.status(404).json('Movie not found to delete');
        }

        return res.status(200).json({
            message: 'Movie successfully deleted',
            movie: movieDeleted
        });
    } catch (err) {
        return next(err);
    }
});

module.exports = router;