var express = require('express');
var router = express.Router();
const fakeDb = require('../public/javascripts/fakeDb');
/* 获取分类导航 */
router.get('/getNavCategories', function(req, res, next) {
    res.send(fakeDb.navCategories);
});
router.get('/getCategoriesList', function(req, res, next) {
    res.send(fakeDb.navCategoriesList[req.query.parentId]);
});
module.exports = router;
