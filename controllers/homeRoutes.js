const router = require("express").Router();
const { BlogPost, Bloggers } = require("../models");
const Blogger = require("../models/Bloggers");

router.get('/', async (req, res) => {
    try {
        const postData = await BlogPost.findAll({
            include: [
                {
                    model: Blogger,
                    attributes: ['username'],
                },
            ],
        });

    const blogpostData = postData.map((blogPost) => blogPost.get({ plain:true }));

    res.render('homepage', { 
        logged_in: req.session.logged_in,
        blogpostData,
    });
    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router;