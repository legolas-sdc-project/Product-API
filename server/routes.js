const router = require('express').Router();

router.get('/products');
router.get('/products/:product_id');
router.get('/products/:product_id/styles');
router.get('/products/:product_id/related');
