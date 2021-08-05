var express = require("express");
var router = express.Router();
const db = require("../models"); // ../ is a folder up
const bcrypt = require("bcrypt");

// get /register
router.get("/register", (req, res) => {
  // render register.ejs
  res.render("register", {
    title: "Register",
  });

});

// /register route (adds a user to the database)
router.post("/register", async (req, res) => {
  // check if user exists
  const users = await db.User.findAll({
    where: {
      // by email
      email: req.body.email,
    },
  });
  // check if user exists in database with the same email via truthiness...
  // if length is 0 = false, if length is > 1 = true
  if (users.length) {
    // send error
    res.status(422).json({ error: "this email address is already registered" });
    return;
  }

  // check if body contains firstName, lastName, email, password
  if (
    !req.body.firstName ||
    !req.body.lastName ||
    !req.body.email ||
    !req.body.password
  ) {
    // send error
    res.status(422).json({
      error:
        "please include all required field(s): firstName, lastName, email, password",
    });
    return;
  }

  // hash the password
  // shamelessly stolen from class code
  // https://github.com/DigitalCraftsStudents/web-ft-06-2021/blob/main/topics/08-databases/class-code/past-cohorts/api-with-db/routes/users.js
  const hash = await bcrypt.hash(req.body.password, 10);

  // create user
  const newUser = await db.User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: hash,
  });

  // res.json(newUser);
  res.redirect("/");
});

// login route

// POST /users/login
router.post("/login", (req, res) => {
  // check for email & password
  if (!req.body || !req.body.email || !req.body.password) {
    // respond with error if not included
    res.status(422).json({ error: "must include email & password" });
    return;
  }

  // find user
  db.User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((user) => {
    // check user password
    
    bcrypt
      .compare(req.body.password, user.dataValues.password)
      .then((success) => {
        if (success) {
          // log in user
          req.session.user = user;
          // res.json({ message: 'successfully logged in' })
          res.redirect("/");
        } else {
          // user entered wrong password
          res.status(401).json({ error: "incorrect password" });
          
        }
      });
  });
});

// GET /logout (logs user out)
router.get("/logout", (req, res) => {
  // tell express that the user logged out
  req.session.user = null;
  // send response to show it worked
  // res.json({ message: "successfully logged out" });
  res.redirect("/");
});


// User fav routes
// Get Favorites Page
router.get('/favorites', async (req, res, next) => {
  db.Favorite.findAll({where: {UserId:req.session.user.id}})
  .then((favorites) => {
    const userFavJobs = []
    // Loop through favorites and get each job id
    favorites.forEach(favorite => {
      userFavJobs.push(favorite.dataValues.JobId)
    });
    // store those job ids in an array OR an object
    // feed those to our database and ask for all the corresponding jobs
    db.Job.findAll({
      where: {
        id: userFavJobs
      }
    })
      // Pass the userFavJobs to our favorites.ejs view
      .then((jobs) => {
        res.render('favorites', {
          userid: req.session.user.id,
          title: "Favorites",
          jobs: jobs,
          
        })
      })
  })
})



router.post('/favorites/:id/add', (req, res, next) => {
  db.User.findByPk(req.session.user.id)
  // req.session.user.id
      .then((user) => {
          user.createFavorite({
              JobId: req.params.id
          })
          .then(()=>{
            res.json({
              Success: true
            })
          })
      });
})


// export module
module.exports = router;
