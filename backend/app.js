const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser);

app.get('/', (req, res) => {
  res.json({ foo: 'bar' });
});

module.exports = app;
