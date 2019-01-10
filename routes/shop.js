const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const router = express.Router();
const productsController = require('../controllers/products')

router.get('/', productsController.getProducts);

router.get('/music', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'public', 'music.mp3'));
})

module.exports = router;