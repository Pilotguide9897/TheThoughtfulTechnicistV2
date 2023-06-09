const router = require("express").Router();
const { BlogPost } = require("../models");
const hasAuthorization = require("../utils/authorize");

router.get("/:id", hasAuthorization, async (req, res) => {
  try {
    const postId = req.params.id;
    const postData = await BlogPost.findByPk(postId);

    const singlePostData = postData.get({ plain: true });
    console.log(singlePostData);

    res.render("edit", { 
        existingPost: singlePostData, 
        logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete post
router.delete("/:id", hasAuthorization, async (req, res) => {
  try {
    const postId = req.params.id;
    const postToDelete = await BlogPost.findOne({
      where: {
        id: postId,
        creator_id: req.session.user_id,
      },
    });

    if (postToDelete) {
      await BlogPost.destroy({
        where: {
          id: postId,
        },
      });

      res.status(200).json({ message: "Blog post deleted successfully." });
    } else {
      res.status(404).json({ message: "Blog post not found." });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});


// Edit post 
router.put("/:id", hasAuthorization, async (req, res) => {
  try {
    const postId = req.params.id;
    const { title, post_content } = req.body;
    console.log(req.body);
    const updatedPost = await BlogPost.update(
      { title, post_content },
      {
        where: {
          id: postId,
          creator_id: req.session.user_id,
        },
      }
    );

    if (updatedPost[0]) {
      res.status(200).json({ message: "Blog post updated successfully." });
    } else {
      res.status(404).json({ message: "Blog post not found." });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;