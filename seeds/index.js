const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

const bloggers = require('./userData.json');
const blogPosts = require('./blogPost.json');
const Blogger = require("../models/Bloggers");
const { BlogPost } = require("../models");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await Blogger.bulkCreate(bloggers, {
    individualHooks: true,
    returning: true,
  });

 const posts = await BlogPost.bulkCreate(blogPosts, {
   individualHooks: true,
   returning: true,
 });  

  process.exit(0);
};

seedDatabase();


