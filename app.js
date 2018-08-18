const express = require('express');
const bodyParser = require('body-parser');

// ****** App configuration *******
const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'pug');

// ******* Routes ***********
app.get('/', (req, res) => {
  res.render('home');
});

app.post('/', (req, res) => {
  const userReq = req.body["date-string"];
  const data = {};
  res.json();
});

// ******* Server init ********
const port = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log('App running on port 3000');
});