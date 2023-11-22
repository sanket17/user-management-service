module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'ums',
      password: 'ums_mysql',
      database: 'ums_dev',
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
    client: 'mysql',
    connection: {
      host: 'staging-host',
      user: 'staging-username',
      password: 'staging-password',
      database: 'staging-database',
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations/mysql',
    },
    seeds: {
      directory: './seeds/mysql',
    },
  },
  production: {
    client: 'mysql',
    connection: {
      host: 'production-host',
      user: 'production-username',
      password: 'production-password',
      database: 'production-database',
    },
    migrations: {
      // tableName: 'knex_migrations',
      directory: './migrations/mysql',
    },
    seeds: {
      directory: './seeds/mysql',
    },
  },
};
