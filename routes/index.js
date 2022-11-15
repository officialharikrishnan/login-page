var express = require('express');
var router = express.Router();

//user validation middleware
function validateUser(req, res, next) {
  let password = '123';
  if (password == req.body.password && req.body.username == 'hari') {
    next()
  } else {
    res.render('index', { error: 'invalid username or password' })
  }
}
//login page session check middleware
function loginRedirect(req, res, next) {
  if (!req.session.user) {
    req.session.loggedIn = false;
  }
  if (req.session.loggedIn) {
    res.redirect('/home')
  } else {
    next()
  }
}

//session check middleware
function sessionCheck(req, res, next) {
  if (req.session.user) {
    console.log("loging user", req.session.user);
    next()
  } else {
    res.redirect('/')
  }
}

// Get login page. 
router.get('/', loginRedirect, function (req, res, next) {

  res.render('index');
});

//Get home page
router.get('/home', sessionCheck, function (req, res, next) {
  console.log(req.session.user);
  let username = req.session.user
  res.render('home', { username })

});
router.post('/login', loginRedirect, validateUser, (req, res) => {
  req.session.loggedIn = true;
  req.session.user = req.body.username
  res.redirect('/home')
})
router.get('/logout', (req, res) => {
  req.session.user = null
  req.session.loggedIn = false
  res.redirect('/')
})
module.exports = router;
