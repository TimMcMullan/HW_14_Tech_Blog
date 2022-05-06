const router = require("express").Router();
const { User } = require("../../models");

router.post("/", async (req, res) => {
    // Creating a new instance of user
    try {
        const newUser = await User.create({
            username: req.body.username,
            password: req.body.password
        });
        req.session.save(() => {
        req.session.userId = newUser.id;
        req.session.userName = newUser.username;
        req.session.logged_in = true;
        res.status(200).json(newUser);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post("/login", async (req, res) => {
    // User login
    try {
        const userlogin = await User.findOne({
            where: {
                username: req.body.username
            },
        });
        if (!userlogin) {
            res.status(400).json({ message: 'Incorrect email or password, please try again' })
            return;
        }
        const validPassword = await userlogin.checkPassword(req.body.password);
        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect email or password, please try again' })
            return;
        }
        req.session.save(() => {
        req.session.userId = newUser.id;
        req.session.userName = newUser.username;
        req.session.logged_in = true;
        res.status(200).json(newUser);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post("/logout", async (req, res) => {
    // User logout
    if (req.session.logged_in) {
        req.session.destroy(() => {
          res.status(204).end();
        });
      } else {
        res.status(404).end();
      }
});

module.exports = router;