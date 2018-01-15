const router = require('express').Router();

router.use('/', require('./controllers/reddit'));

module.exports = router;
