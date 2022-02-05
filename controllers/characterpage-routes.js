const { Character, User } = require("../models");
const router = require("express").Router();
const withAuth = require("../utils/auth");

//Protected the character route by forcing there to be a user that is logged in to see the page.
router.get("/character", withAuth, (req, res) => {
  Character.findAll({
    //Character is the Model Name and .findAll is the method so we get
    //all character data from the Character table.
    where: {
      user_id: req.session.user_id,
    },
    include: [
      //Including the username from the User model as well since there is a
      //Foreign key on the Character Model (user_id) that can match up w/ the username
      //via the users table (id).
      {
        model: User,
        attributes: ["id", "username"],
      },
    ],
  }).then((dbCharData) => {
    //creating a variable and calling it characters which is mapping over the
    //data in the character table.
    const characters = dbCharData.map((character) =>
      character.get({ plain: true })
    );
    console.log("character page existing characters", characters);
    //once all this data is pulled we render the scores page and include the characters data
    //as an object so it can be used w/ our handlebars template.
    res.render("characterpage", { characters });
  });
});

module.exports = router;
