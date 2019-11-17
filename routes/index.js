const router = require('express').Router();
const products = require('./products');

router.use('/products', products); // matches all requests to /api/products/

router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

module.exports = router;