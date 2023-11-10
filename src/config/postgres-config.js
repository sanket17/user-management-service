const path = require('path');
module.exports = {
  development: {
    // debug: true,
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'ums',
      user: 'postgres',
      password: 'postgres',
      port: 5432
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: path.join(__dirname, '../../migrations'),
    },
    seeds: {
      directory: path.join(__dirname, '../../seeds'),
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
