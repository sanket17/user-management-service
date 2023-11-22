const session = require('express-session');
const KnexSessionStore = require('connect-session-knex');
const knex = require('./src/config/dbUtils')

module.exports = {
  store: new KnexSessionStore({
    knex,
    tablename: 'sessions', // Make sure it matches the table name in the migration
    sidfieldname: 'sid',
    createtable: true,
    clearInterval: 1000 * 60 * 60, // Cleanup expired sessions every hour
  }),
  secret: '177d11cf30e60b49059ce3f47b6132bd7d63808eace4a9644b89c57595eaa6d9',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24, // Session expiration time, e.g., 1 day
  },
}
