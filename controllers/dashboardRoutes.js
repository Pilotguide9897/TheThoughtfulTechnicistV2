const router = require("express").Router();
const { BlogPost, Bloggers } = require("../models");
const Blogger = require("../models/Bloggers");
const hasAuthorization = require("../utils/authorize");

// router.get("/", hasAuthorization, async (req, res) => {
//   try {
//     const userId = 
//     const postData = await BlogPost.findAll({
//       where: {
//         creator_id: userId, // Add this line to filter posts by the user's ID
//       },
//     });

//     const blogpostData = postData.map((blogPost) =>
//       blogPost.get({ plain: true })
//     );

//     res.render("dashboard", {
//       blogpostData,
//     });

//     res.render("dashboard");
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get("/", async (req, res) => {
  try {
    const data = {logged_in: req.session.logged_in}
    console.log("Data passed to Handlebars:", data);
    console.log("Dashboard session data:", req.session);

    res.render("dashboard", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
