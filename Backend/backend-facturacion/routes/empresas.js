const express = require('express');
const router = express.Router();
const { getEmpresas } = require('../controllers/empresasController');

router.get('/', getEmpresas);

module.exports = router;
