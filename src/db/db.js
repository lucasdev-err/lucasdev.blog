// Importa o módulo pg para criar uma conexão com o banco de dados
// Importa o arquivo de configuração
// Cria uma nova conexão com o banco de dados
// Conecta ao banco de dados e exibe uma mensagem de sucesso ou erro
const { Pool } = require('pg');
const config = require('../config/env');
const connectionString = config.db.connectionString;

const pool = new Pool({
    connectionString,
});

pool.connect()
    .then(() => console.log("Conectado ao banco de dados"))
    .catch(err => console.error("Erro ao conectar ao banco de dados", err));
module.exports = pool;