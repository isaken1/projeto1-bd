const { Pool } = require('pg');

const pool = new Pool({
  user: 'isaac',
  host: 'localhost',
  database: 'empresa_api',
  password: 'abcd1234',
  port: 5432,
});

module.exports = {
  pool,
};
