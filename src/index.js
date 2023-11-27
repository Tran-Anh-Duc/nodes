const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path'); // Import thư viện path để làm việc với đường dẫn
const { log } = require('console');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('combined'));

// Cấu hình handlebars làm template engine
app.engine('hbs',handlebars({
    extname : '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
  return res.render('home');
});


app.get('/news', (req, res) => {
  return res.render('news'); 
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
