const express = require("express");
const { listarPosts, listarPost, criarPost, deletarPost, editarPost } = require("../controllers/postController");

const router = express.Router(); // Corrigido para criar uma nova instância do roteador

router.get("/", listarPosts);
router.get("/:id", listarPost);
router.post("/", criarPost);
router.delete("/:id", deletarPost);
router.put("/:id", editarPost);

module.exports = router; // Exportar o roteador corretamente