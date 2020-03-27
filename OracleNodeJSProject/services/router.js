const express = require('express');
const router = new express.Router();
const stores = require('../controllers/stores.js');

router.route('/stores/:id?')
    .get(stores.get);

module.exports = router;