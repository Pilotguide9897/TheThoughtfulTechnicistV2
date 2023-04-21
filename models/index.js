const BlogPost = require('./BlogPost');
const Blogger = require('./Bloggers');
const Bloggers = require('./Bloggers');

Blogger.hasMany(BlogPost, {
  foreignKey: "creator_id",
  onDelete: "CASCADE",
});

BlogPost.belongsTo(Blogger, {
  foreignKey: "creator_id",
});

module.exports = {
    BlogPost,
    Bloggers,
};