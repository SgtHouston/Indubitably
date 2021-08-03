var express = require('express');
var router = express.Router();
const db = require('../models')


/* GET home page. */
router.get('/', (req, res, next) => {
    // first argument is template second is data passed into template
    if (req.session.user != null) {
        res.render('home', {

            title: 'INDUBITABLY',
            user: req.session.user
        })
    } else {
        res.render('home', {

            title: 'INDUBITABLY'
        })
    }
})


module.exports = router