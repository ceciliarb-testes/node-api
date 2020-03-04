require('dotenv').config();

const config = {
    env: process.env.NODE_ENV || 'development',
    const: {
        MAXIMO_MINS_ATIVO: 40
    },
    jwt: {
        secret: process.env.JWT_SECRET,
    },
    server: {
        host: 'localhost',
        port: process.env.PORT
    },
    database: {
        user: process.env.NODE_ORACLEDB_USER,
        password: process.env.NODE_ORACLEDB_PASSWORD,
        connectString: process.env.NODE_ORACLEDB_CONNECTIONSTRING,
        externalAuth  : process.env.NODE_ORACLEDB_EXTERNALAUTH ? true : false
    },
    logger: {
        host: process.env.LOGGER_HOST,
        port: process.env.LOGGER_PORT,
    },

};
