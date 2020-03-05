const http = require('http');
const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const config = require('../config');
const routes = require('../routes');

let httpServer;

const iso8601RegExp = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/;
 
function reviveJson(key, value) {
  // revive ISO 8601 date strings to instances of Date
  if (typeof value === 'string' && iso8601RegExp.test(value)) {
    return new Date(value);
  } else {
    return value;
  }
}

module.exports = {
  initialize: () => {
    return new Promise((resolve, reject) => {
        const api = express();
        httpServer = http.createServer(api);
    
        api.use(express.json({ reviver: reviveJson }));
        api.use(compression());
        api.use(helmet());
        api.use('/api', routes);

        httpServer.listen(config.server.port)
        .on('listening', () => {
            console.log(`Web server listening on localhost:${config.server.port}`);
    
            resolve();
        })
        .on('error', err => {
            reject(err);
        });
    })
  },

  close: () => {
      return new Promise((resolve, reject) => {
        httpServer.close((err) => {
          if (err) {
            reject(err);
            return;
          }
     
          resolve();
        });
      });
   }
}