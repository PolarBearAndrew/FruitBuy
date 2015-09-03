var express = require('express');
var router  = express.Router();

router.get('/:page', (req, res, next) => {
  res.render(req.params.page);
});

module.exports = router;
