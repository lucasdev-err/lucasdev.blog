const express = require('express');
const { listarUsers, listarUser } = require('../controllers/userController');

const router = express.Router();

router.get("/", listarUsers);
router.get("/:id", listarUser);

module.exports = router;