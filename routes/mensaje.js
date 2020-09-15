const express = require('express');
const router = express.Router();
const mensajeController = require('../controllers/mensaje');

router.get('/', mensajeController.helloWorld);
router.post('/', mensajeController.addUser);

module.exports = router;