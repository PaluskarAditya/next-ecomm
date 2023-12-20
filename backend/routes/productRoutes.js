const express = require('express');
const { getProducts, getProductById, getUniqueProducts, getProductByCategory, addProduct } = require('../controllers/productController');
const router = express.Router();

router.get('/:category', getProductByCategory);
router.get('/:limit', getUniqueProducts);
router.get('/get/:id', getProductById);
router.get('/', getProducts);
router.post('/', addProduct);

module.exports = router;
