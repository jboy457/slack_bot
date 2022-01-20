'use stict'

const { notFound, sayHello, message } = require('../controllers/bot-controller');

const router = require('express').Router();

router.post('/', sayHello);
router.post('/messages', message);
router.use('*', notFound);

module.exports = router;
