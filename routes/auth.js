const router = require("express").Router();
const userCtrl = require("../controllers/user.controller");

// AUTH ROUTERS
router.post("/register", userCtrl.register);
router.post("/login", userCtrl.login);
router.post("/getUserById", userCtrl.getUserById);
router.post("/authenticateUser", userCtrl.authenticateUser);

//MOVIE ROUTERS
router.post("/");

module.exports = router;
