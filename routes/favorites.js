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

/* GET home page. */
router.post('/:id/add', (req, res, next) => {
    db.User.findByPk(1)
    // req.session.user.id
        .then((user) => {
            user.createFavorite({
                JobId: req.params.id
            })
        });
})



module.exports = router;