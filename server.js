const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(4000, () => {
  console.log('connected');
});
