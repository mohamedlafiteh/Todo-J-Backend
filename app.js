const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');
const data = require('./data');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/todos', (req, res) => {
  res.status(200).send(data);
});

module.exports = app;
