const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/AuthController");

router.post("/login/check/info", AuthController.login);
router.post("/register", AuthController.register);
router.post("/premium", AuthController.premium);


module.exports = router;
