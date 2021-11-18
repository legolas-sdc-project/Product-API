const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  database: 'atelierproducts',
  password: 'root',
  port: 5432,
});

module.exports.getAllProducts = async (count, page) => {
  const query = {};
  await pool.query(query)
    .then()
    .catch();
};

module.exports.getProduct = async (productID) => {
  const query = {};
  await pool.query(query)
    .then()
    .catch();
};

module.exports.getProductInfo = async (productID) => {
  const query = {};
  await pool.query(query)
    .then()
    .catch();
};

module.exports.getRelatedInfo = async (productID) => {
  const query = {};
  await pool.query(query)
    .then()
    .catch();
};
