'use strict'

module.exports = {
  appPool: {
    user: process.env.NODE_ORACLEDB_USER || "hr",
    password: process.env.NODE_ORACLEDB_PASSWORD,
    connectString: process.env.NODE_ORACLEDB_CONNECTIONSTRING || "localhost/orclpdb1",
    poolMin: 10,
    poolMax: 10,
    poolIncrement: 0
  }
};