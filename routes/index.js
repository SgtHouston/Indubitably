var express = require("express");
var router = express.Router();
const db = require("../models");

/* GET home page. */
router.get("/", async (req, res, next) => {
  // first argument is template second is data passed into template
  const locations = await db.Location.findAll({});
  res.render("home", {
    title: "INDUBITABLY",
    user: req.session.user || undefined,
    locations: locations,
    search: req.query.search || "",
    locationId: req.query.location || ""
  });
});

module.exports = router;
