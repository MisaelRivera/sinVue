require('dotenv').config();
const express = require('express'),
      path = require('path');
const app = express(),
      includes = path.resolve('src/views/includes'),
      PORT = 3000,
      pagesRouter = require('./routes/pages'),
      userRouter = require('./routes/user'),
      session = require('express-session');


function setIncludesPath (req, res, next) {
    req.includes = includes;
    next();
}

app.set('view engine', 'ejs');
app.set('views', 'src/views');

app.use(setIncludesPath);

app.use(session({
    secret: process.env.SECRET,
}))
app.use('/static', express.static('public'));

app.use('/', pagesRouter);
app.use('/user', userRouter);

app.listen(PORT, () => {
    console.log('server started at port: ' + PORT);
});