const knex = require('knex');
const postgresConfig = require('./postgres-config');
const environment = process.env.NODE_ENV || 'development'
const db = knex(postgresConfig[environment])
module.exports = db