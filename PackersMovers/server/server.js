const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const fs = require('fs');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require('./routes/routes.js')(app, fs);

const server = app.listen(3001, () => {
  console.log('listening on port %s...', server.address().port);
});