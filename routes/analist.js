const express = require('express');
const router = express.Router();

function authorization (req, res, next) {
    if (!req.session.username) res.redirect('/');
    else next();
}

router.use(authorization);

router.get('/', (req, res) => {
    res.render('pages/analist/index');
});


module.exports = router;