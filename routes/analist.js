const express = require('express');
const router = express.Router(),
      bodyParser = require('body-parser'),
      Solution = require('../src/models/Solution'),
      { objectKeyInArray, getObjectPropertyFromArray } = require('../utilities/arrays');
const urlencoded = bodyParser.urlencoded( { extended: false, } );

function authorization (req, res, next) {
    if (!req.session.username) res.redirect('/');
    else next();
}

router.use(authorization);

router.get('/', (req, res) => {
    res.render('pages/analist/index');
});

router.get('/solutions', (req, res) => {
    res.render('pages/analist/soluciones');
});

router.post('/solutions', urlencoded, (req, res) => {
    res.send(typeof req.body.preparation_date);
});


module.exports = router;