var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose =require('mongoose');

const mongodb='mongodb://localhost/juego_dados';
mongoose.connect(mongodb,{useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>console.log('mongoDB conected'))
    .catch(err=>console.log(err));


const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));
//ruta para crerar los usuarios
app.use('/user', require('./routes/create-user'));
//ruta para borrar los usuarios
app.use('/user', require('./routes/delete-user'));
app.use('/user',require('./routes/total-change-user'))
app.use('/user',require('./routes/partial-change-user'))

module.exports = app;
