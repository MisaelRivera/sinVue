const express = require('express');
const router = express.Router(),
      bodyParser = require('body-parser'),
      User = require('../src/models/User');
const urlencoded = bodyParser.urlencoded({ extended: false });
// Loggin view
router.get('/', (req, res) => {
    console.log(req.query.errs);
    const errs = req.query.errs ? req.query.errs:{};
    res.render('pages/index', {errs});
});

router.post('/login', urlencoded, async (req, res) => {
    const errs = [];
    const user = await User.findOne({ where: { username: req.body.username } });
    console.log('Here!');
    console.log(user);
    if (!user) {
        errs.push({ inexistent_user: 'El usuario ingresado no se encuentra registrado'});
        console.log('reached!');
        res.redirect('/?errs=1');
    } else {
        if (!user.password === req.body.password) {
            errs.push({ wrong_password: 'La contraseña es incorrecta' });
        } 

        if (errs.length > 0) {
            console.log('reached!');
            res.redirect('/?errs=1');
        } else {

        }
    }
});

module.exports = router;