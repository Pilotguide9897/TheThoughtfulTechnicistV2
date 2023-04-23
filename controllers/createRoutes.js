const router = require("express").Router();
const hasAuthorization = require("../utils/authorize");
const BlogPost = require("../models/BlogPost");

router.get("/", hasAuthorization, async (req, res) => {
    try {
        res.render("createPost", {
          logged_in: req.session.logged_in,
        });
    } catch (err) {
      res.status(500).json(err);
    }
});

router.post("/", hasAuthorization, async (req, res) => {
  try {
    const newBlogPost = await BlogPost.create({
      ...req.body,
      creator_id: req.session.user_id,
    });

    res.status(200).json({ message: "Blog post added successfully." });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;