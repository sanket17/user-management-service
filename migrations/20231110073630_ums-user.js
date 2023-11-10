exports.up = function (knex) {
  return knex.schema.createTable('user', function (table) {
    table.uuid('id').primary().notNullable().unique();
    table.string('username').notNullable();
    table.string('password');
    table.string('email').unique().notNullable();
    table.string('oauth_id').nullable();
    table.boolean('email_verified').defaultTo(false);
    table.boolean('isDeleted').defaultTo(false);
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('user');
};