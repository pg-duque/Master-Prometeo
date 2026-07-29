const express = require('express');
const { connect } = require('./utils/db');

// Requerimos las rutas dedicadas de películas y cines
const movieRoutes = require('./routes/movie.routes');
const cinemaRoutes = require('./routes/cinema.routes');

connect();

const PORT = 3000;
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// Usamos los enrutadores de películas y cines
server.use('/movies', movieRoutes);
server.use('/cinemas', cinemaRoutes);

// Control de rutas no encontradas (404)
server.use(/(.*)/, (req, res, next) => {
    const error = new Error('Route not found');
    error.status = 404;
    return res.status(404).json(error.message);
});

// Manejador global de errores (500)
server.use((err, req, res, next) => {
    return res.status(err.status || 500).json(err.message || 'Unexpected error');
});

server.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`);
});