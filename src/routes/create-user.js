const express = require('express');
const router = express.Router();

const User=require('../models/user')

router.post('/', function (req, res, next) {
    const user= new User({
        name:req.body.name,
        lastname:req.body.lastname,
        age:req.body.age,
        email:req.body.email,
        familiares:req.body.familiares,
    })
    user.save()
    .then(result => res.json(result))
    .catch(err=> res.json(err));
});
module.exports = router;
