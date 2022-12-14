const express = require('express');
const router = express.Router();

const User=require('../models/user')

router.delete('/:id', function (req, res, next) {

    /**==========  borrado fisico ========= */
    // User.findByIdAndDelete(req.params.id)
    // .then(result=>res.json(result))
    // .catch(err=>res.json(err));

    /**borrado logico con plugin*/
    User.deleteById(req.params.id)
        .then(result=>res.json(result))
        .catch(err=>res.json(err));
});
module.exports = router;
