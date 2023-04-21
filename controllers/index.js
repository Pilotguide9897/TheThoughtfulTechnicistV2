// Establishes a new instance of the express router object. This can be used to define routes and middleware for a part of your app.
const router = require('express').Router();

//const apiRoutes = require('./api'); // Remember to fill this in once I know 
const homeroutes = require('./homeRoutes'); //Home routes are generally used to handle routes and middleware for requests made to the root route of the app ('/'). This can include things like rendering home page templates, serving static assets, handling. 
const {loginRoute, signupRoute} = require('./validationRoutes/index');
router.use('/login', loginRoute);
router.use('/signup', signupRoute );
router.use('/', homeroutes);
//router.use('/api', apiRoutes);

module.exports = router; 




