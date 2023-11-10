module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'mysql',
      password: 'root',
      database: 'ums-dev',
    },
    migrations: {
      // tableName: 'knex_migrations',
      directory: './migrations/mysql',
    },
    seeds: {
      directory: './seeds/mysql',
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
      // tableName: 'knex_migrations',
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
