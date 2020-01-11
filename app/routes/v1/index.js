const express = require('express');
// ルーティング
const router = express.Router();
router.use('/article', require('./article.js'));
router.use('/user', require('./user.js'));

router.get('/', function(req, res) {
  res.json({
    message: 'Hello,world'
  });
});

module.exports = router;
