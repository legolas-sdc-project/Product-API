const express = require('express');
const morgan = require('morgan');
const db = require('../database/index');

const app = express();

// Logging and parsing
app.use(morgan('dev'));
app.use(express.json());

// Set up routes
app.get('/products', async (req, res) => {
  const count = req.query.count || 5;
  const page = req.query.page || 1;

  try {
    const allProducts = await db.getAllProducts(count, page);
    res.send(allProducts);
  } catch (err) {
    res.sendStatus(500);
  }
});

app.get('/products/:product_id', async (req, res) => {
  const productID = req.params.product_id;

  try {
    const product = await db.getProduct(productID);
    res.send(product);
  } catch (err) {
    res.sendStatus(500);
  }
});

app.get('/products/:product_id/styles', async (req, res) => {
  const productID = req.params.product_id;

  try {
    const productInfo = await db.getProductInfo(productID);
    res.send(productInfo);
  } catch (err) {
    res.sendStatus(500);
  }
});

app.get('/products/:product_id/related', async (req, res) => {
  const productID = req.params.product_id;

  try {
    const relatedProducts = await db.getRelatedInfo(productID);
    res.send(relatedProducts);
  } catch (err) {
    res.sendStatus(500);
  }
});

// Run server
app.listen(3000, () => {
  console.log('Listening...');
});
