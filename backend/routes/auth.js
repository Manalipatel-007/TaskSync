const express = require("express");
const { registerUser, loginUser, logoutUser } = require("../controller/auth.controller");
const router = express.Router();

router.post("/signup", registerUser);  // Sign up route
router.post("/login", loginUser);  // Login route
router.post("/logout", logoutUser); // Logout route

module.exports = router;
