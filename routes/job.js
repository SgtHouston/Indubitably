var express = require('express');
var router = express.Router();
const db = require('../models')


/* GET home page. */
router.post('/search', async (req, res, next) => {
  db.Job.findAll()
    .then((jobs) => {
      const jobResults = db.User.findAll({
        where: {
          // by job title
          title: req.body.searchform,
        },
      });
      console.log(jobResults.title)
      





      res.render('jobs', {
          title : 'Jobs',
          jobs : jobs
      })        
  });
})


// router.get('/search', (req, res, next) => {
//   const title = db.Job.findAll({
//     where: {
//       title: {
//         [Sequelize.Op.iLike]: title
//       }
//     }
//   });
//   console.log(title)
// })






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
