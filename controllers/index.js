const router = require("express").Router();

const homeRoutes = require("./homeRoutes");
const { loginRoutes, signupRoute, userRoutes } = require("./validationRoutes");

router.use("/", homeRoutes);
router.use("/login", loginRoutes);
router.use("/signup", signupRoute);
router.use("/user", userRoutes);

module.exports = router;


