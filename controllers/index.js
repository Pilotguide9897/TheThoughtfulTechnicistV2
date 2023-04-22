const router = require("express").Router();

const homeRoutes = require("./homeRoutes");
const dashboardRoutes = require("./dashboardRoutes");
const { loginRoutes, signupRoute, userRoutes } = require("./validationRoutes/");

router.use("/", homeRoutes);
router.use("/login", loginRoutes);
router.use("/signup", signupRoute);
router.use("/dashboard", dashboardRoutes);

module.exports = router;


