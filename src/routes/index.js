'use stict'

const { notFound, sayHello, message, getUserResponse } = require('../controllers/bot-controller');

const router = require('express').Router();

router.post('/', sayHello);
router.post('/messages', message);
router.get('/responses', getUserResponse);
router.use('*', notFound);

module.exports = router;
