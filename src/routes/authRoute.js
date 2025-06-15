const express = require("express");
const { loginUser, registerUser } = require("../controllers/authController");

const router = express.Router();

router.post("/login", loginUser);
// router.post("/logout", logoutUser);

module.exports = router;