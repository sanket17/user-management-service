const path = require('path');
module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.HOST,
      database: process.env.DB_DATABASE,
      user: process.env.DB_USER ,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: '../../migrations',
    },
    seeds: {
      directory: '../../seeds',
    },
  },
  staging: {
    client: 'pg',
    connection: {
      host: 'staging-host',
      user: 'staging-username',
      password: 'staging-password',
      database: 'staging-database',
    },
    migrations: {
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },
  test: {
    client: 'pg',
    connection: {
      host: 'test-host',
      user: 'test-username',
      password: 'test-password',
      database: 'test-database',
    },
    migrations: {
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },
  production: {
    client: 'pg',
    connection: {
      host: 'production-host',
      user: 'production-username',
      password: 'production-password',
      database: 'production-database',
    },
    migrations: {
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },
};
