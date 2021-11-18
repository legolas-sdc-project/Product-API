const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  database: 'atelierproducts',
  password: 'root',
  port: 5432,
});

pool.connect()
  .then(() => console.log('Connected to database'))
  .catch((err) => console.log(err));

module.exports.getAllProducts = async (count, page, cb) => {
  const low = (page - 1) * count + 1;
  const high = page * count;
  const query = {
    text: 'SELECT * FROM products WHERE product_id BETWEEN $1 and $2',
    values: [low, high],
  };
  await pool.query(query)
    .then((results) => cb(null, results))
    .catch((err) => cb(err));
};

module.exports.getProduct = async (productID, cb) => {
  const query = {};
  await pool.query(query)
    .then()
    .catch();
};

module.exports.getProductInfo = async (productID, cb) => {
  const query = {};
  await pool.query(query)
    .then()
    .catch();
};

module.exports.getRelatedInfo = async (productID, cb) => {
  const query = {};
  await pool.query(query)
    .then()
    .catch();
};
