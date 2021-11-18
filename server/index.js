const express = require('express');
const morgan = require('morgan');
const db = require('../database/index');

const app = express();

// Logging and parsing
app.use(morgan('dev'));
app.use(express.json());

// Set up routes
app.get('/products', (req, res) => {
  const count = req.query.count || 5;
  const page = req.query.page || 1;
  db.getAllProducts(count, page, (err, results) => {
    if (err) {
      res.send(400);
    } else {
      res.send(results.rows);
    }
  });
});

app.get('/products/:product_id', (req, res) => {
  const productID = req.params.product_id;
  db.getProduct(productID, (err, results) => {
    if (err) {
      res.send(400);
    } else {
      res.send(results.rows);
    }
  });
});

app.get('/products/:product_id/styles', (req, res) => {
  const productID = req.params.product_id;
  db.getProductInfo(productID, (err, results) => {
    if (err) {
      res.send(400);
    } else {
      res.send(results.rows);
    }
  });
});

app.get('/products/:product_id/related', (req, res) => {
  const productID = req.params.product_id;
  db.getRelatedInfo(productID, (err, results) => {
    if (err) {
      res.send(400);
    } else {
      res.send(results.rows[0].json_agg);
    }
  });
});

// Run server
app.listen(3000, () => {
  console.log('Listening...');
});
