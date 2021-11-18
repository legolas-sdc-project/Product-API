const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  database: 'atelierproducts',
  password: 'root',
  port: 5432,
});
