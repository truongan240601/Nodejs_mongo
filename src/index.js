const path = require('path');
const express = require('express');
const app = express();
const { engine } = require ('express-handlebars');
const morgan = require('morgan');
const { count } = require('console');
const port = 3000;

const route =require('./routes')
const db =require('./config/db')

//conect to DB
db.connect();


app.use(express.static(path.join(__dirname,'public')));
app.use(morgan('combined'));


// template engine
app.engine('hbs', engine({extname:'.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources','views'));

// Routes init
route(app);




app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})