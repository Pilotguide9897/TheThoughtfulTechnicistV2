const router = require("express").Router();
const { BlogPost } = require("../models");
const hasAuthorization = require("../utils/authorize");

router.get("/:id", hasAuthorization, async (req, res) => {
  try {
    const postId = req.params.id;
    const postData = await BlogPost.findByPk({postId});

    const singlePostData = postData.get({ plain: true });

    res.render("post", { singlePostData });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete post
router.get("/:id", hasAuthorization, async (req, res) => {});

// Edit post 
router.put("/", hasAuthorization, async (req, res) => {});

module.exports = router;