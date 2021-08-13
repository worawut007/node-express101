const express = require('express');
const router = require('./app/routes');

const app = express();
const port = 8080;
const options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders(res, path, stat) {
    res.set('x-timestamp', Date.now());
  },
};
app.use(express.static('public', options));

app.use(router);

app.listen(port);
console.log('Server is running at port :', port);
