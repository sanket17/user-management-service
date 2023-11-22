const uuidConfig = (knex) => {
  if (knex.client.config.client === 'pg')
    return 'UUID_GENERATE_V4()';
  else return '(UUID())'
}
module.exports = { uuidConfig };