// Importa o arquivo app.js e o config/env.js
const app = require("./app");
const config = require("./config/env");
const pool = require("./db/db");
// Importa o módulo pg para criar uma conexão com o banco de dados

app.listen(config.app.port, () => {
    console.log(`Servidor rodando na porta ${config.app.port}`);
});

