const express = require("express");
const postRoutes = require("./postRoutes");
// Importa o arquivo de rotas
const userRoutes = require("./userRoutes");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({ message: "API está rodando" });
});

router.use("/posts", postRoutes);
router.use("/users", userRoutes);

module.exports = router;