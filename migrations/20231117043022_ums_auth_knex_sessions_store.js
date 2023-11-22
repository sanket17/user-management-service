const { uuidConfig } = require('../src/config/uuidGenerate')
exports.up = function (knex) {
  return knex.schema.createTable('sessions', function (table) {
    table.string('sid').primary().unique();
    table.json('sess').notNullable(); // Session data
    table.timestamp('expired').notNullable(); // Session expiration timestamp
    table.timestamp('created').defaultTo(knex.fn.now()); // Session creation timestamp
    table.index('expired');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('sessions');
};