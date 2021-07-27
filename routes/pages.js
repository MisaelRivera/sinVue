const express = require('express');
const router = express.Router(),
      bodyParser = require('body-parser'),
      User = require('../src/models/User');
const urlencoded = bodyParser.urlencoded({ extended: false }),
      { objectKeyInArray, getObjectPropertyFromArray } = require('../utilities/arrays');

// Loggin view
router.get('/', (req, res) => {
    const errs = [];
    if (req.query.inexistent_user) errs.push({ inexistent_user: 'El usuario ingresado no se encuentra registrado'});
    if (req.query.wrong_password) errs.push({ wrong_password: 'La contraseña es incorrecta'});
    res.render('pages/index', { errs, objectKeyInArray, getObjectPropertyFromArray });
});

router.post('/login', urlencoded, async (req, res) => {
    try {
        var user = await User.findOne({ where: { username: req.body.username } });
    } catch(e) {
        console.log(e);
    }

    if (!user) {
        res.redirect('/?inexistent_user=true');
    } else {
        if (user.password !== req.body.password) {
            res.redirect('/?wrong_password=true');
        } else {
            req.session.username = user.username;
            req.session.role;
            res.redirect('/user');
        }
    }
});

router.post('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) console.log(err);
        else res.redirect('/');
    });
});

module.exports = router;