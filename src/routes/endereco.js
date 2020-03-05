'use strict';

const express = require('express');
const router = express.Router();
const enderecoController = require('../controllers/endereco-controller');

// router.get('/', controller.list);
router.get('/:cep/:num', enderecoController.get);

module.exports = router;