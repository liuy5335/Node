/**
 * Created by Nan on 2016/11/15.
 */
var express = require('express');
var routes = express.Router();


routes.get('/login', function (req, res) {
    res.render('login');
});

module.exports.login = routes;