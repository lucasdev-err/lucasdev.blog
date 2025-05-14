const express = require("express");
const { listarPosts, listarPost } = require("../controllers/postController");

const router = express.Router(); // Corrigido para criar uma nova instância do roteador

router.get("/", listarPosts);
router.get("/:id", listarPost)

module.exports = router; // Exportar o roteador corretamente