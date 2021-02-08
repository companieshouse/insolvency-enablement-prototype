const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router
module.exports = router
router.get('/', function (req, res) {
  req.session.scenario = {}
  res.render('index')
})

router.get('/limited-company', function (req, res) {
    req.session.scenario = {}
    res.render('limited-company')
  })

  router.post('/form', function (req, res) {
    res.redirect('/form/applicant-name')
  })