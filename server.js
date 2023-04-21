const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const sequelize = require("./config/connection");
const helpers = require('./utils/helpers');
//const establishModelConnections = require('./models/index');

// create an instance of the express app and define the port.
const app = express();
const PORT = process.env.PORT || 3001;


// const sess = {
//   secret: process.env.SESSION_SECRET,
//   resave: false,
//   saveUninitialized: false,
// };

//app.use(session(sess)); 

const hbs = exphbs.create({ helpers }); 
app.engine('handlebars', hbs.engine) 
app.set('view engine', 'handlebars'); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(express.static(path.join(__dirname, "public"))); 
app.use(routes); 


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});
