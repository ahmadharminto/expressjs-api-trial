const express = require('express');
const router = express.Router();
const User = require('./models/users');

router.get('/', function(req, res, next) {
    User.find({})
        .then(function(result) {
            res.send(result);
        })
        .catch(next);
});

router.get('/:id', function(req, res, next) {
    User.findOne({_id: req.params.id})
        .then(function(result) {
            res.send(result);
        })
        .catch(next);
});

router.post('/', function(req, res, next) {
    const {firstname, lastname} = req.body;

    User.create(req.body)
        .then(function(result) {
            res.send(result);
        })
        .catch(next);
});

router.delete('/:id', function(req, res, next) {
    User.findOneAndRemove({_id: req.params.id})
        .then(function(result) {
            res.send(result);
        })
        .catch(next);
});

router.put('/:id', function(req, res, next) {
    User.findOneAndUpdate({_id: req.params.id}, req.body)
        .then(function(result) {
            User.findOne({_id: result._id})
                .then(function(user) {
                    res.send(user);
                });
        })
        .catch(next);
});

module.exports = router;