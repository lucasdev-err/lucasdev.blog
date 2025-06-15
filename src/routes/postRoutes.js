const express = require("express");
const { listarPosts, listarPost, criarPost, deletarPost, editarPost } = require("../controllers/postController");
const verificaJWT = require("../middlewares/auth/verificaJWT");

const router = express.Router(); // Corrigido para criar uma nova instância do roteador

router.get("/", listarPosts);
router.get("/:id", listarPost);
router.post("/", verificaJWT, criarPost);
router.delete("/:id", verificaJWT, deletarPost);
router.put("/:id", verificaJWT, editarPost);

module.exports = router; // Exportar o roteador corretamente