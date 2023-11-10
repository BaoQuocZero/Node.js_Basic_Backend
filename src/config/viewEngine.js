const path = require('path');
const express = require('express')

const confitViewEngine = (app) => {
    //console.log('>>> Check __dirname', __dirname);
    app.set('views', path.join('./src', 'views'))
    app.set('view engine', 'ejs')
    //config static file: images, css, js
    app.use(express.static(path.join('./src', 'public')));
}

module.exports = confitViewEngine;