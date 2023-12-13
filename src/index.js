const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path'); // Import thư viện path để làm việc với đường dẫn
const { log } = require('console');

const app = express();
const port = 3000;
const db = require('./config/db');

const route = require('./routes');

//db connect

db.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
  extended:true
}));

app.use(express.json());


//app.use(morgan('combined'));

// Cấu hình handlebars làm template engine
app.engine('hbs',handlebars({
    extname : '.hbs'
}));
app.set('view engine', 'hbs');
//app.set('views', path.join(__dirname, 'resources/views'));

app.set('views', path.join(__dirname, 'resources', 'views'));

route(app);



app.get('/', (req, res) => {
  return res.render('home');
});





app.get('/news', (req, res) => {
  return res.render('news'); 
});


app.get('/search', (req, res) => {
  //console.log(req.query.q);
  return res.render('search');
});

app.post('/search', (req, res) => {
  console.log(req.body);
  return res.send('');
});

app.listen(port, () => {
  console.log(` app listening on port ${port}`);
});
