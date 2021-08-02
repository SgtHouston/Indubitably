var express = require('express');
var router = express.Router();
const db = require('../../models')


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