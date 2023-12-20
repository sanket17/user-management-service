const { uuidConfig } = require('../src/config/uuidGenerate')
exports.up = async function (knex) {
  return knex.schema.createTable('master_user', async function (table) {
    table.uuid('id').primary().unique().defaultTo(knex.raw(uuidConfig(knex)));
    table.string('first_name', 255).notNullable();
    table.string('last_name', 255).notNullable();
    table.string('password');
    table.string('email').unique().notNullable();
    table.string('phone').unique().notNullable();
    table.string('oauth_id').nullable();
    table.string('oauth_provider').nullable();
    table.boolean('email_verified').defaultTo(false);
    table.boolean('isDeleted').defaultTo(false);
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('master_user');
};