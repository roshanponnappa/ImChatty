var express = require('express');
var router = express.Router();


router.get('/', function (req, res) {
    // if (req.session.username) {
        // res.redirect("/notes");
    // } else {
        res.render('index', {
            title: 'I\'m Chatty',
            error: req.query.error
        });
    // }
});

module.exports = router;
