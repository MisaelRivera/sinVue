const express = require('express');
const router = express.Router(),
      bodyParser = require('body-parser'),
      User = require('../src/models/User'),
      Product = require('../src/models/Product'),
      { objectKeyInArray, getObjectPropertyFromArray } = require('../utilities/arrays');
const urlencoded = bodyParser.urlencoded( { extended: false, } );

function authorization (req, res, next) {
    if (!req.session.username) res.redirect('/');
    else next();
}

router.use(authorization);

router.get('/', (req, res) => {
    res.render('pages/user/index', { includes: req.includes });
});

router.get('/products', async (req, res) => {
    const products = await Product.find({});
    res.render('pages/user/products', { products, includes: req.includes });
});

router.get('/product', async (req, res) => {
    const errors = {};
    res.render('pages/user/products/product', { includes: req.includes });
});

module.exports = router;