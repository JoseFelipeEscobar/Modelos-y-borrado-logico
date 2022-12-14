const express = require('express');
const router = express.Router();

const User=require('../models/user')

router.put('/:id', function (req, res, next) {
    User.findByIdAndUpdate(req.params.id,{

        name:req.body.name,
        lastname:req.body.lastname,
        age:req.body.age,
        email:req.body.email,
        familiares:req.body.familiares,
    })
    .then(result => res.json(result))
    .catch(err=> res.json(err));
});
module.exports = router;
