const knex = require('../../config/dbUtils');

const createUser = async (userData) => {
  const result = await knex('master_user').insert(userData).returning('*');
  return result;
}
const getUserByEmail = async (email) => {
  const result = await knex('master_user').where({ email }).first();
  return result;
}

module.exports = { createUser, getUserByEmail }