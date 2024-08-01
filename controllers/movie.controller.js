const movieCtrl = {};
const Movie = require('../models/movie.Model');

movieCtrl.createMovie = async (req, res) => {
    try {
        const movieExists = await Movie.findOne({ movieId: req.body.id });

        if (movieExists) {
            res.status(200).json({
                ok: true,
                message: `Movie exists already`,
                data: ""
            });
        } else {

            const newMovie = new Movie({
                movieId: req.body.id,
                title: req.body.title,
                comments: req.body.comments,
                ratings: req.body.ratings
            });
            await newMovie.save();

            res.status(200).json({
                ok: true,
                message: "New movie registered successfully.",
                data: newMovie,
            });
        }
    } catch (error) {
        console.log("Error registering movie", error);
        res.status(500).json({
            ok: false,
            message: `Internal server error. ${error}`,
            data: "",
        });
    }
};

movieCtrl.addComment = async (req, res) => {
    try {
        const { movieId, commentText, userId } = req.body;

        const movie = await MovieModel.findOne({ movieId });
        if (!movie) {
            return res.status(404).json({ message: "Movie not found" });
        }

        const newComment = new MovieComment({
            commentText,
            user: ObjectId(userId)
        });
        await newComment.save();

        movie.comments.push(newComment._id);
        await movie.save();

        res.status(201).json(newComment);
    } catch (error) {
        console.error("Error adding comment", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

movieCtrl.rateMovie = async (req, res) => {
    try {
        const { movieId, score, userId } = req.body;

        const movie = await MovieModel.findOne({ movieId });
        if (!movie) {
            return res.status(404).json({ message: "Movie not found" });
        }

        const newRating = new Rating({
            score,
            user: ObjectId(userId)
        });
        await newRating.save();

        movie.ratings.push(newRating._id);
        await movie.save();

        res.status(201).json(newRating);
    } catch (error) {
        console.error("Error rating movie", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

movieCtrl.getMovieById = async (req,res) =>{

}

module.exports = movieCtrl;
