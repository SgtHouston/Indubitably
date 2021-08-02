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













module.exports = router;
