'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controller/nextid');

router.get('/', controller.get);
router.put('/:id', controller.put);

module.exports = router; 