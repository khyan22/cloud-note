const router = require('express').Router();
const apiRoute = require('./apiRoutes');
const htmlRoute = require('./htmlRoutes');

router.use('/api', apiRoute);
router.use('/', htmlRoute);

module.exports = router;