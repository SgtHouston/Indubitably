var express = require("express");
var router = express.Router();
const db = require("../models");
const { Op } = require("sequelize");

/* GET home page. */
router.get("/search", async (req, res, next) => {
  const locations = await db.Location.findAll();
  const query = {
    title: {
      [Op.iLike]: "%" + req.query.search + "%",
    }
  } 
  // if location exists 
  if (req.query.location){
    // add to query
    query.LocationId = req.query.location
  }
  const jobs = await db.Job.findAll({
    where: query,
    include: [db.Location],
  });
  res.render("jobs", {
    user: req.session.user || undefined,
    locations: locations,
    title: "Jobs",
    jobs: jobs,
    search: req.query.search || "",
    locationId: req.query.location,
  });
});

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
