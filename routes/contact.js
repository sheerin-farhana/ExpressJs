const express = require('express');

const router = express.Router();
const productsController = require('../controllers/products');

router.get('/contact-us',productsController.getContactUs);

router.get('/success',productsController.getSuccess);



router.post('/contact-us',productsController.postContactUs);

module.exports = router;