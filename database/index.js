const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  database: 'atelierproducts',
  password: '',
  port: 5432,
});

pool.connect()
  .then(() => console.log('Connected to database'))
  .catch((err) => console.log(err));

module.exports.getAllProducts = async (count, page) => {
  const low = (page - 1) * count + 1;
  const high = page * count;
  const query = {
    text: 'SELECT product_id AS id, name, slogan, description, category, default_price FROM products WHERE product_id BETWEEN $1 and $2',
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
    text: "SELECT product_id AS id, name, slogan, description, category, default_price, (SELECT json_agg(json_build_object('feature', feature, 'value', value)) FROM features WHERE product_id = $1) AS features FROM products WHERE product_id = $1",
    values: [productID],
  };

  try {
    const product = await pool.query(query);
    return product.rows;
  } catch (err) {
    return err;
  }
};

module.exports.getProductInfo = async (productID) => {
  const query = {
    text: "SELECT product_id, (SELECT json_agg(json_build_object('style_id', s.style_id, 'name', s.name, 'original_price', s.original_price, 'sale_price', s.sale_price, 'default?', s.default_style, 'photos', (SELECT json_agg(json_build_object('thumbnail_url', p.thumbnail_url, 'url', p.url)) FROM photos p WHERE p.style_id = s.style_id), 'skus', (SELECT json_object_agg(skus.sku_id, json_build_object('quantity', skus.quantity, 'size', skus.size)) FROM skus WHERE skus.style_id = s.style_id))) AS results FROM styles s WHERE product_id = $1) FROM styles WHERE product_id = $1 GROUP BY product_id",
    values: [productID],
  };

  try {
    const productInfo = await pool.query(query);
    return productInfo.rows;
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
