const { uuidConfig } = require('../src/config/uuidGenerate')
exports.up = function (knex) {
  return knex.schema.createTable('sessions', function (table) {
    table.string('sid').primary().unique().defaultTo(knex.raw(uuidConfig(knex)));
    table.json('sess').notNullable(); // Session data
    table.timestamp('expired').notNullable(); // Session expiration timestamp
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('sessions');
};