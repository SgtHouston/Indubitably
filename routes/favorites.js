// var express = require('express');
// var router = express.Router();
// const db = require('../models')


// // Get Favorites Page
// router.get('/favorites', (req, res, next) => {
//     // first argument is template - second is data passed into template
//     console.log(req.session)
//     res.render('favorites', {
//         job: job,
//         userid: req.session.user.dataValues.id
//     })
// })


// router.post('/:id/add', (req, res, next) => {
//     db.User.findByPk(1)
//     // req.session.user.id
//         .then((user) => {
//             user.createFavorite({
//                 JobId: req.params.id
//             })
//         });
// })



// module.exports = router;