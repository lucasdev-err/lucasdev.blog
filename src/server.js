// Importa o arquivo app.js e o config/env.js
const app = require("./app");
const config = require("./config/env");

app.listen(config.app.port, () => {
    console.log(`Servidor rodando na porta ${config.app.port}`);
});

