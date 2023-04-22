const router = require("express").Router();
const hasAuthorization = require("../utils/authorize");

router.get("/", hasAuthorization, async (req, res) => {
    try {




        res.render("post");
    } catch (err) {
      res.status(500).json(err);
    }
});

router.post("/", hasAuthorization, async (req, res) => {});

module.exports = router;