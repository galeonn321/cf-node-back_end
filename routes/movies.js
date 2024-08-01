const router = require("express").Router();
const movieCtrl = require("../controllers/movie.controller");

// MOVIES ROUTERS POST
router.post("/createMovie", movieCtrl.createMovie);
router.post("/addComment", movieCtrl.addComment);
router.post("/rateMovie", movieCtrl.rateMovie);


//MOVIES ROUTERS GET

module.exports = router;