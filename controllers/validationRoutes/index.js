// const router = require("express").Router();

// const loginRoutes = require("./loginRoute");
// const signupRoute = require("./signupRoute");
// const userRoutes = require("./userRoutes");

// router.use("/login", loginRoutes);
// router.use("/signup", signupRoute);
// router.use("/users", userRoutes);

// module.exports = router;

const loginRoutes = require("./loginRoute");
const signupRoute = require("./signupRoute");
const userRoutes = require ("./userRoutes");

module.exports = {
  loginRoutes,
  signupRoute,
  userRoutes,
};
