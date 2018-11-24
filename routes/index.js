var express = require('express');
var router = express.Router();
var fs = require('fs')

router.get('/', function(req, res) {
    res.render('default')
});
router.get('/airplane', function(req, res) {
    res.redirect('/')
});

router.post('/airplane', function(req, res) {
    var ap = req.body.airplane;
    fs.readFile(__dirname + '/' + ap + '.json', (err, data) => {
        if (err) throw err;
        res.render('airplane', { entries: JSON.parse(data) })
    })
});

module.exports = router;