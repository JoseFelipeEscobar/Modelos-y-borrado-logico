const express = require('express');
const router = express.Router();

const User=require('../models/user')

/* cambios parciales a un usuario  */

router.patch('/name/:id', function (req, res, next) { //cambio parcial name

    User.findByIdAndUpdate(req.params.id, {name:req.body.name})
    .then(result => {res.json(result)} )
    .catch(err=> {res.json(err)} );
});

module.exports = router;
