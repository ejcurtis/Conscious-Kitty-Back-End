const express = require('express');
const app = express();
const path = require('path')
const morgan = require('morgan');
const api = require('../routes')

app.use(morgan('dev'));

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', api);

app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

const port = process.env.PORT || 8080; // this can be very useful if you deploy to Heroku!
app.listen(port, function () {
  console.log(`Your server, listening on port ${port}`);
});