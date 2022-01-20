'use stict';

const router = require('express').Router();
const {
  notFound, sayHello, message, getUserResponse
} = require('../controllers/bot-controller');

router.post('/', sayHello);
router.post('/messages', message);
router.get('/responses', getUserResponse);
router.use('*', notFound);

module.exports = router;
