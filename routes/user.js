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
    res.render('pages/user/index');
});

router.get('/products', async (req, res) => {
    const products = await Product.find({});
    res.render('pages/user/products', { products });
});

module.exports = router;