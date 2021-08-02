var express = require('express');
var router = express.Router();
const db = require('../models')


/* GET home page. */
router.get('/', (req, res, next) => {
  db.Job.findAll()
    .then((jobs) => {
      res.render('jobs', {
          title : 'Jobs',
          jobs : jobs
      })        
  });
})




// router.post('/', (req, res) => {

//   document.addEventListener('click', (e) => {
//     if (e.target.classList.contains('job-column')) {
//         let jobID = e.target.dataset.id
//         db.Job.findOne({
//             where: {
//                 id: req.body.id
//             }
//         })
//             .then((job) => {

//             })
//     }
// })


// })











module.exports = router;
