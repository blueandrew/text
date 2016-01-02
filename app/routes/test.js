var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res) {
	console.log(req.body.id);
    console.log(req.body.name);
    console.log(req.body.tel);
    res.render('post', {id: req.body.id,name: req.body.name,tel: req.body.tel });
});
module.exports = router;
