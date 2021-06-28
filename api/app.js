const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const carrerasRouter = require('./routes/carrera');
const materiasRouter = require('./routes/materia');
const alumnoRouter = require('./routes/alumno');
const profesorRoouter = require('./routes/profesor');
const signIn  = require('./routes/autorizacion');
const singUp  = require('./routes/autorizacion');


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routers
app.use('/car',carrerasRouter);
app.use('/mat',materiasRouter);
app.use('/alum',alumnoRouter);
app.use('/prof',profesorRoouter);
app.use('/auth',signIn);
app.use('/auth',singUp);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
