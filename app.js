const express = require('express');
const bodyParser = require('body-parser');

// ****** App configuration *******
const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'pug');

// ******* Routes ***********