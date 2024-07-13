const router = require('express').Router();

const loginRoutes = require('./login-routes');
const blogRoutes = require('./blog-routes');

router.use('/login', loginRoutes)
router.use('blog',blogRoutes)

module.exports = router;