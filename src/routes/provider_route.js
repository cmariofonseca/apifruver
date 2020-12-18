const { Router } = require('express');
const router = Router();
const {
    getProviders,
    getProviderById,
    createProvider,
    deleteProvider,
    updateProvider
} = require('../controllers/provider_controller');

router.get('/api/providers', getProviders);
router.get('/api/provider/:id', getProviderById);
router.post('/api/provider', createProvider);
router.delete('/api/provider/:id', deleteProvider);
router.put('/api/provider/:id', updateProvider);

module.exports = router;
