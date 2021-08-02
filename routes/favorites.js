var express = require('express');
var router = express.Router();
const db = require('../models')



router.get('/users/favorites', (req, res, next) => {
    res.render('favorites', {
        job: job
    })
})