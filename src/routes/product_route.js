const { Router } = require('express');
const router = Router();
const {
    getProducts,
    getProductById,
    createProduct,
    deleteProduct,
    updateProduct
} = require('../controllers/product_controller');

router.get('/products', getProducts);
router.get('/product/:id', getProductById);
router.post('/product', createProduct);
router.delete('/product/:id', deleteProduct);
router.put('/product/:id', updateProduct);

module.exports = router;
