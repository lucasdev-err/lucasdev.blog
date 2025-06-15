const express = require('express');
const { listarUsers, listarUser } = require('../controllers/userController');
const verificaJWT = require('../middlewares/auth/verificaJWT')

const router = express.Router();

router.get("/", verificaJWT, listarUsers);
router.get("/:id", verificaJWT, listarUser);

module.exports = router;