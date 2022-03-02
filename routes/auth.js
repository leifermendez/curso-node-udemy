const express = require("express");
const router = express.Router();
const { registerCtrl, loginCtrl } = require("../controllers/auth");
const { validateRegister, validateLogin } = require("../validators/auth");

/**
 * Route for register new user
 */
router.post("/register", validateRegister, registerCtrl);

/**
 * Route for login user
 */
router.post("/login", validateLogin, loginCtrl);

module.exports = router;
