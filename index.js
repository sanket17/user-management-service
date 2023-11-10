const express = require('express');
const passport = require('passport');
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/', (req, res) => {
  res.json('welcome')
});

app.listen(port, () => {
  console.log('Server is running on port 3000');
});
