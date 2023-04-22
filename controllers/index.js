const router = require("express").Router();

const homeRoutes = require("./homeRoutes");
const dashboardRoutes = require("./dashboardRoutes");
const editRoutes = require("./editRoutes");
const postRoutes = require("./postRoutes");
const createRoutes = require("./createRoutes");
const { loginRoutes, signupRoute } = require("./validationRoutes/");


router.use("/", homeRoutes);
router.use("/edit", editRoutes);
router.use("/post", postRoutes);
router.use("/create", createRoutes);
router.use("/login", loginRoutes);
router.use("/signup", signupRoute);
router.use("/dashboard", dashboardRoutes);

module.exports = router;


