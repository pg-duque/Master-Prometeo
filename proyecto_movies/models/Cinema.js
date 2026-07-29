const mongoose = require('mongoose');

const cinemaSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        location: { type: String, required: true },
        // Array de referencias a la colección Movie
        movies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }]
    },
    {
        timestamps: true
    }
);

const Cinema = mongoose.model('Cinema', cinemaSchema);

module.exports = Cinema;