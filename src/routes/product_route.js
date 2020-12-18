const { Router } = require('express');
const router = Router();
const {
    getProducts,
    getProductById,
    createProduct,
    deleteProduct,
    updateProduct
} = require('../controllers/product_controller');

router.get('/api/products', getProducts);
router.get('/api/product/:id', getProductById);
router.post('/api/product', createProduct);
router.delete('/api/product/:id', deleteProduct);
router.put('/api/product/:id', updateProduct);

module.exports = router;
