const oracledb = require('oracledb');
const dbConfig = require('../config/database.js');

async function initialize() {
  const pool = await oracledb.createPool(dbConfig.posPool);
}

module.exports.initialize = initialize;

async function close() {
  await oracledb.getPool().close();
}

module.exports.close = close;