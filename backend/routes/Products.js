import express from 'express';
import { create, list, update, productById, readPhoto, read, remove } from '../controllers/Products';
const router = express.Router();

router.post('/products', create);

router.get('/products', list);
router.get('/products/:productId', read);
// router.get('/product/photo/:productId', readPhoto);

router.put('/products/:productId', update);

router.delete('/products/:productId', remove);

router.param('productId', productById);


module.exports = router;