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

module.exports.getAllProducts = async (count, page) => {
  const low = (page - 1) * count + 1;
  const high = page * count;
  const query = {
    text: 'SELECT * FROM products WHERE product_id BETWEEN $1 and $2',
    values: [low, high],
  };
  try {
    const allProducts = await pool.query(query);
    return allProducts.rows;
  } catch (err) {
    return err;
  }
};

module.exports.getProduct = async (productID) => {
  const query = {
    text: "SELECT * FROM products (SELECT json_agg(json_build_object('feature', feature, 'value', value)) AS feats FROM features WHERE product_id = $1) WHERE product_id = $1",
    values: [productID],
  };
  // const query2 = {
  //   text: "SELECT json_agg(json_build_object('feature', feature, 'value', value)) AS features FROM features WHERE product_id = $1",
  //   values: [productID],
  // };

  try {
    const product = await pool.query(query);
    return product.rows;
  } catch (err) {
    return err;
  }
};

module.exports.getProductInfo = async (productID) => {
  const query = {
    text: '',
    values: [productID],
  };

  try {
    const productInfo = await pool.query(query);
    return productInfo;
  } catch (err) {
    return err;
  }
};

module.exports.getRelatedInfo = async (productID) => {
  const query = {
    text: 'SELECT json_agg(related_product_id) FROM related WHERE current_product_id = $1 AND related_product_id != 0',
    values: [productID],
  };

  try {
    const relatedProducts = await pool.query(query);
    return relatedProducts.rows[0].json_agg;
  } catch (err) {
    return err;
  }
};
