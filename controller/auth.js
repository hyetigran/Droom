const router = require("express").Router();
const bcrypt = require("bcryptjs");
const Users = require("../model/Users");
const { generateToken } = require("../util/generateToken");
const { authValidation } = require("../middleware/validation/index");

router.post("/register", authValidation, async (req, res) => {
  try {
    let user = req.body;
    console.log(user);
    user.password = await bcrypt.hashSync(user.password, 12);
    let existingUser = await Users.findBy({ email: user.email });
    console.log(existingUser);
    if (existingUser) {
      return res.status(400).json({
        message: "Oops, looks like this email already exists"
      });
    }
    let newUser = await Users.add(user);
    res.status(201).json({ newUser });
  } catch (error) {
    res.status(500).json({
      message: "Oops, something went wrong while registering",
      error
    });
    //throw new Error(error);
  }
});

router.post("/login", authValidation, async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findBy({ email }).first();

    if (user && bcrypt.compareSync(password, user.password)) {
      const token = await generateToken(user);
      return res.status(200).json({ token });
    } else {
      return res.status(401).json({
        message: "Oops, username or password is incorrect"
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Oops, something went wrong while logging in"
    });
    //throw new Error(error);
  }
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
