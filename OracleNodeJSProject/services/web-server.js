const http = require('http');
const express = require('express');
const morgan = require('morgan');
const router = require('./router.js');
const webServerConfig = require('../config/web-server.js');


let httpServer;

function initialize() {
    return new Promise((resolve, reject) => {
        const app = express();
        httpServer = http.createServer(app);
    
        app.use('/restapi/resources', router);
        app.get('/', async (req, res) => {
            const result = await database.simpleExecute('select user, systimestamp from dual');
            const user = result.rows[0].USER;
            const date = result.rows[0].SYSTIMESTAMP;

            res.end(`DB user: ${user}\nDate: ${date}`);
        });


        httpServer.listen(webServerConfig.port)
            .on('listening', () => {
                console.log(`Web server listening on localhost:${webServerConfig.port}`);

                resolve();
            })
            .on('error', err => {
                reject(err);
            });
    });
}

module.exports.initialize = initialize;

function close() {
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

module.exports.close = close;