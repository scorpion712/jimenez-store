const express = require('express');
const productController = require("../controller/productController");

const router = express.Router();

// Defining API routes
router.post('/products', productController.fetchProducts);

module.exports = router;