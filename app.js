// npm install
// npm install express
var express = require('express');
// require database
// npm install nodemon
const db = require('./models');
var path = require('path');
// npm install cookie-parser
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/job');
var usersRouter = require('./routes/users');
const jobRouter = require('./routes/job')

var app = express();
app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/jobs', jobRouter)







module.exports = app;
