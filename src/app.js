// Instalação de dependências
const express = require("express");
const config = require("./config/env");
const routes = require("./routes");

const app = express();

app.use(express.json()); // Permite o uso de JSON
app.use("/api", routes); // Define a rota base da API

module.exports = app;