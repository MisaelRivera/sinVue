const express = require('express');
const router = express.Router(),
      User = require('../src/models/User');

// Loggin view
router.get('/', (req, res) => {
    const errs = {};
    res.render('pages/index');
});

router.post('/login', (req, res) => {
    const errs = [];
    const user = User.findOne({ where: { username: req.body.username } });
    if (!user) {
        errs.push({ inexistent_user: 'El usuario ingresado no se encuentra registrado'});
    } else {
        if (!user.password === req.body.password) {
            errs.push({ wrongPassword: 'La contraseña es incorrecta' });
        } else {

        }
    }
});

module.exports = router;