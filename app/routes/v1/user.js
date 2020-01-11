const express = require('express');
const router = express.Router();
const UserModel = require('../../models/userModel.js');

router.get('/', function(req, res) {
  UserModel.find().then(function(users) {
    res.json(users);
  });
});

router.post('/', function(req, res) {
  // モデル作成．
  const User = new UserModel();

  // データを詰め込む
  User.name = req.body.name;
  User.screen_name = req.body.screen_name;
  User.bio = req.body.bio;

  // 保存処理
  User.save(function(err) {
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
  const userId = req.params.id;
  UserModel.findById(userId, function(err, user) {
    res.json(user);
  });
});

//routerをモジュールとして扱う準備
module.exports = router;
