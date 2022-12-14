const express = require('express');
const router = express.Router();

const User=require('../models/user')

router.get('/', function (req, res, next) {
    const data=User.find({
         $or: [ 
             { 'deleted': { $eq: false} },
             {'deleted': {$exists:false}}
        ] 
    });
    data
    .then(result =>{ res.json(result)})
    .catch(err => {console.log(err) });

/**buscar sin filtros de borrado logico */
//   const data=User.find();
//   
});
module.exports = router;
