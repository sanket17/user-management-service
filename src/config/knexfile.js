module.exports = {
  development: {
    client: process.env.DB_CLIENT || 'pg',
    connection: {
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'ums',
      password: process.env.DB_PASSWORD || 'ums',
      database: process.env.DB_DATABASE || 'ums_dev',
      port: process.env.DB_PORT || 5432
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