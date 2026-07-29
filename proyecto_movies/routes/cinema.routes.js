const express = require('express');
const router = express.Router();
const Cinema = require('../models/Cinema');

// 1. OBTENER TODOS LOS CINES (incluyendo los datos de las películas con populate)
router.get('/', async (req, res, next) => {
    try {
        const cinemas = await Cinema.find().populate('movies');
        return res.status(200).json(cinemas);
    } catch (err) {
        return next(err);
    }
});

// 2. OBTENER CINE POR ID
router.get('/id/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        const cinema = await Cinema.findById(id).populate('movies');
        if (!cinema) {
            return res.status(404).json('Cinema not found');
        }
        return res.status(200).json(cinema);
    } catch (err) {
        return next(err);
    }
});

// 3. CREAR UN NUEVO CINE
router.post('/', async (req, res, next) => {
    try {
        const newCinema = new Cinema({
            name: req.body.name,
            location: req.body.location,
            movies: req.body.movies || []
        });

        const createdCinema = await newCinema.save();
        return res.status(201).json(createdCinema);
    } catch (err) {
        return next(err);
    }
});

// 4. EDITAR UN CINE (Nombre, Ubi o Películas)
router.put('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const cinemaUpdated = await Cinema.findByIdAndUpdate(
            id,
            req.body,
            { new: true, runValidators: true }
        ).populate('movies');

        if (!cinemaUpdated) {
            return res.status(404).json('Cinema not found to update');
        }

        return res.status(200).json(cinemaUpdated);
    } catch (err) {
        return next(err);
    }
});

// 5. AÑADIR UNA PELÍCULA A UN CINE EXISTENTE (Añade la id de una película al array de un cine)
router.put('/:id/add-movie', async (req, res, next) => {
    try {
        const { id } = req.params;
        const { movieId } = req.body;

        const cinemaUpdated = await Cinema.findByIdAndUpdate(
            id,
            { $push: { movies: movieId } },
            { new: true }
        ).populate('movies');

        if (!cinemaUpdated) {
            return res.status(404).json('Cinema not found');
        }

        return res.status(200).json(cinemaUpdated);
    } catch (err) {
        return next(err);
    }
});

// 6. ELIMINAR UN CINE
router.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const cinemaDeleted = await Cinema.findByIdAndDelete(id);

        if (!cinemaDeleted) {
            return res.status(404).json('Cinema not found to delete');
        }

        return res.status(200).json({
            message: 'Cinema successfully deleted',
            cinema: cinemaDeleted
        });
    } catch (err) {
        return next(err);
    }
});

module.exports = router;