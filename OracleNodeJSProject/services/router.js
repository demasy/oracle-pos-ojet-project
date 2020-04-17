const express = require('express');
const router = new express.Router();
const stores = require('../controllers/stores.js');

router.route('/stores/:id?')
    .get(stores.get)
    ;

    // router.route('/stores/:id?')
    // .get(stores.get)
    //  .post(stores.post)
    // .put(stores.put)
    // .delete(stores.delete);


module.exports = router;