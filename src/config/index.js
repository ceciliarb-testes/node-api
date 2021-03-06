require('dotenv').config();

const config = {
    env: process.env.NODE_ENV || 'development',
    server: {
        host: 'localhost',
        port: process.env.PORT  || 3000
    },
    const: {
        MAXIMO_MINS_ATIVO: 40
    },
    jwt: {
        secret: process.env.JWT_SECRET,
    },
    logger: {
        host: process.env.LOGGER_HOST,
        port: process.env.LOGGER_PORT,
    },
};

module.exports = config;