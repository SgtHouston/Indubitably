var express = require('express');
var router = express.Router();
const db = require('../models')


// Get Favorites Page
router.get('/users/favorites', (req, res, next) => {
    // first argument is template - second is data passed into template
    res.render('favorites', {
        job: job
    })
})