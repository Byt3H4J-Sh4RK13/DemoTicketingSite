const express = require('express');
const router = express.Router();
const productController = require('../controller/Ticket_Desc_Query.js');

router.get('/products', productController.getAllProducts);      // GET /api/products
router.get('/products/:id', productController.getProductById);  // GET /api/products/1

module.exports = router;