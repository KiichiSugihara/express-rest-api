const express = require('express');
const router = express.Router();
const ArticleModel = require('../../models/articleModel.js');

router.get('/', function(req, res) {
  ArticleModel.find().then(function(articles) {
    res.json(articles);
  });
});
router.post('/', function(req, res) {
  // モデル作成．
  const Article = new ArticleModel();

  // データを詰め込む
  Article.title = req.body.title;
  Article.text = req.body.text;
  Article.setDate();

  // 保存処理
  Article.save(function(err) {
    if (err) {
      // エラーがあった場合エラーメッセージを返す
      res.send(err);
    } else {
      // エラーがなければ「Success!!」
      res.json({ message: 'Success!!' });
    }
  });
});

router.get('/:id', function(req, res) {
  const ArticleId = req.params.id;
  ArticleModel.findById(ArticleId, function(err, article) {
    res.json(article);
  });
});

router.delete('/:id', function(req, res) {
  const ArticleId = req.params.id;
  ArticleModel.remove({ _id: ArticleId }).then(function() {
    res.json({ message: 'Success!!' });
  });
});
//routerをモジュールとして扱う準備
module.exports = router;
