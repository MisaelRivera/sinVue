const express = require('express');
const app = express(),
      path = require('path'),
      PORT = 3000,
      pagesRouter = require('./routes/pages');

app.set('view engine', 'ejs');
app.set('views', 'src/views');

app.use('/static', express.static('public'));

app.use('/', pagesRouter);

app.listen(PORT, () => {
    console.log('server started at port: ' + PORT);
});