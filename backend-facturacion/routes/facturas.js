const express = require('express');
const router = express.Router();
const { getFacturas } = require('../controllers/facturasController');

router.get('/', getFacturas);

module.exports = router;
