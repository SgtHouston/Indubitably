function checkAuth(req, res, next) {
  // check if user exists on session
  if (req.session.user) {
    next()
  // or if the req is on the login page
  } else if (req.path === '/users/login') {
    next()
  // if not, send an error
  } else {
    res.status(401).json({ error: 'not logged in' })
  }
}

module.exports = checkAuth