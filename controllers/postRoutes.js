const router = require("express").Router();
const { BlogPost, Comment } = require("../models");
const hasAuthorization = require("../utils/authorize");

router.get("/:id", hasAuthorization, async (req, res) => {
  try {
    const postId = req.params.id;
    const postData = await BlogPost.findByPk(postId, {
      include: [
        {
          model: Comment,
          attributes: ["id", "content", "creator_id", "createdAt"],
          order: [["createdAt", "ASC"]],
        },
      ],
    });

    const singlePostData = postData.get({ plain: true });

    res.render("post", {
      singlePostData,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Post comments
router.post("/:id", hasAuthorization, async (req, res) => {
  try {
    const postId = req.params.id;
    const { content } = req.body;
    const creator_id = req.session.user_id;

    // Create a new comment with the form data and the creator's user_id
    await Comment.create({
      content,
      creator_id,
      postId,
    });

    res.status(200).json({ message: 'Comment added successfully.' });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
