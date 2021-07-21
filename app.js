require('dotenv').config();
const express = require('express');
const app = express(),
      path = require('path'),
      PORT = 3000,
      pagesRouter = require('./routes/pages'),
      analistRouter = require('./routes/analist'),
      session = require('express-session');

app.set('view engine', 'ejs');
app.set('views', 'src/views');


app.use(session({
    secret: process.env.SECRET,
}))
app.use('/static', express.static('public'));

app.use('/', pagesRouter);
app.use('/analist', analistRouter);

app.listen(PORT, () => {
    console.log('server started at port: ' + PORT);
});