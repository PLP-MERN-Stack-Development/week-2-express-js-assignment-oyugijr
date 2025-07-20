const express = require('express');
const router = express.Router();
const validateProduct = require('../middleware/validateProduct');

const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/productsController');

const auth = require('../middleware/auth');

// Public route
router.get('/', getAllProducts);
router.get('/:id', getProductById);

// Protected routes
router.post('/', auth, validateProduct, createProduct);
router.put('/:id', auth, validateProduct, updateProduct);
router.delete('/:id', auth, deleteProduct);

module.exports = router;
