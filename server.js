const path = require("path");
const express = require("express");
const session = require("express-session");
const { engine } = require("express-handlebars");
const controllers = require("./controllers");
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

//using Sequilize to store the session.
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: process.env.SESSION_SECRET || "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.engine("handlebars", engine());
app.set("view engine", "handlebars");

app.use(express.json());
//Should this be extended true?
app.use(express.urlencoded({ extended: false }));
//setting the pulbic folder as our main static folder.
app.use(express.static(path.join(__dirname, "public")));

// turn on the controllers (api and page routes).
app.use(controllers);

//turn on the connection to db and server
//If any changes are made to the Models (including any associations made on the
//index.js file in the Models folder) set this to force: true then run once to
//recreate the tables/associations, then set it back to false.
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening on port " + PORT));
});
