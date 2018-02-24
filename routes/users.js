var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/1', function(req, res, next) {
  res.send('respond with a 111111111111');
});
router.get('/2', function(req, res, next) {
    res.send('respond with a 22222222222');
});
router.get('/', function (req,res,next) {
    res.send('respoonded')
})

module.exports = router;
