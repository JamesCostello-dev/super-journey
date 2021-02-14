// index api
const router = require('express').Router();

const userRoute = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

router.use('./users', userRoute);
router.use('./thoughts', thoughtRoutes);

module.exports = router;