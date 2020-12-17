const { Router } = require('express');
const router = Router();
const {
    getProviders,
    getProviderById,
    createProvider,
    deleteProvider,
    updateProvider
} = require('../controllers/provider_controller');

router.get('/providers', getProviders);
router.get('/provider/:id', getProviderById);
router.post('/provider', createProvider);
router.delete('/provider/:id', deleteProvider);
router.put('/provider/:id', updateProvider);

module.exports = router;
