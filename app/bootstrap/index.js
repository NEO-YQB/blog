const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const hbs = exphbs.create();
const bodyParser = require('body-parser');
const {
    urlencoded
} = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash=require('connect-flash')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(urlencoded({
        extended: false
    }));
    app.use(cookieParser());
    app.use(session({
        secret: 'kdacfiw734rtaxr3rci8wyw8',
        resave: true,
        saveUninitialized: true,
        cookie: {
            maxAge: 6000
        }
    }))
    app.use(flash());
    app.engine('handlebars', hbs.engine);
    app.set('view engine', 'handlebars');
    app.set('views', path.join(__dirname, '../views'));
    app.use('/static', express.static(path.join(__dirname, '../../public')));
};