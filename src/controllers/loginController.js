const router = require("express").Router();
const { login } = require("../services/authService.js");
const bcrypt = require("bcrypt");

const loginPage = (req, res) => {
    console.log(req.cookie);
  res.render("login");
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  const user = await login(username, password);
  const result = await bcrypt.compare(password, user.password);

  if (result) {
    req.session.user = { id: user._id, username: user.username};
    console.log(req.session, 'login');
    res.redirect("/");
  } else {
    const err = "Wrong username or password!";
    res.render("login", { err, username, password });
  }
};

router.get("/login", loginPage);
router.post("/login", loginUser);

module.exports = router;
