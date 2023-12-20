const express = require('express');
const { getProducts, getProductById, getUniqueProducts, getProductByCategory } = require('../controllers/productController');
const router = express.Router();

router.get('/:category', getProductByCategory);
router.get('/:limit', getUniqueProducts);
router.get('/get/:id', getProductById);
router.get('/', getProducts);

module.exports = router;
