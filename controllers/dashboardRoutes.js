const router = require("express").Router();
const { BlogPost, Bloggers } = require("../models");
const Blogger = require("../models/Bloggers");
const hasAuthorization = require("../utils/authorize");

router.get("/", hasAuthorization, async (req, res) => {
  try {
    const userId = req.session.user_id; // Get the user ID from the session

    const postData = await BlogPost.findAll({
      where: {
        creator_id: userId, // Filter posts by the user's ID
      },
    });

    const blogpostData = postData.map((blogPost) =>
      blogPost.get({ plain: true })
    );

    res.render("dashboard", {
      blogpostData,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Can likely just remove
// router.get("/", async (req, res) => {
//   try {
//     const data = {logged_in: req.session.logged_in}
//     console.log("Data passed to Handlebars:", data);
//     console.log("Dashboard session data:", req.session);

//     res.render("dashboard", {
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
