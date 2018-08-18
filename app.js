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

app.post('/api/timestamp', (req, res) => {
  const userReq = req.body["date-string"];
  const dateFormatted = new Date(userReq);
  const data = {};

  if (userReq) {
    data.unix = dateFormatted.getTime();
    data.utc = dateFormatted.toUTCString();
  } else {
    data.utc = new Date();
    data.unix= Date.now();
  }

  res.json(data);
});

// ******* Server init ********
const port = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log('App running on port 3000');
});