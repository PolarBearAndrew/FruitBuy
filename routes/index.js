var express = require('express');
var router  = express.Router();

router.get('/BS', (req, res, next) => {
  res.render('em');
});

router.get('/:page', (req, res, next) => {
  res.render(req.params.page.replace(/.html/,''));
});

router.get('/jsdc', (req, res, next) => {
  res.render(req.params.page);
});

module.exports = router;