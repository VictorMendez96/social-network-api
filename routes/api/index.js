const router = require('express').Router();
const thoughtsRoutes = require('./thoughtsRoutes');
const usersRoutes = require('./usersRoutes');

router.use('/thoughs', thoughtsRoutes);
router.use('/users', usersRoutes);

module.exports = router;