const dotenv = require('dotenv');
dotenv.config();
// Define as variáveis de ambiente
module.exports = {
    app: {
        port: process.env.PORT || 3000
    },
    db: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
        database: process.env.DB_DATABASE,
        connectionString: process.env.CONNECTION_STRING
    }
};