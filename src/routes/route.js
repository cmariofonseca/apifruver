const { Router } = require('express');
const router = Router();
const {
    getProducts,
    createProduct,
    getProviders,
    createProvider
} = require('../controllers/controller');

router.get('/products', getProducts);
router.post('/product', createProduct);

router.get('/providers', getProviders);
router.post('/provider', createProvider);

module.exports = router;
