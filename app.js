require('env2')('.env');
const { join } = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const router = require('./routes');

const app = express();

app.set('PORT', process.env.PORT || 4000);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/v1', router);
module.exports = app;

