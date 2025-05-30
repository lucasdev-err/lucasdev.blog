const dotenv = require('dotenv');
dotenv.config();
// Define as variáveis de ambiente
module.exports = {
    app: {
        port: process.env.PORT || 3000
    },
    db: {
        connectionString: process.env.CONNECTION_STRING
    },
    jwt: {
        secret: process.env.SECRET
    }
};