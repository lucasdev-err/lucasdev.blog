const express = require("express");
const { listarPosts, listarPost, criarPost, deletarPost } = require("../controllers/postController");

const router = express.Router(); // Corrigido para criar uma nova instância do roteador

router.get("/", listarPosts);
router.get("/:id", listarPost);
router.post("/", criarPost);
router.delete("/:id", deletarPost);

module.exports = router; // Exportar o roteador corretamente