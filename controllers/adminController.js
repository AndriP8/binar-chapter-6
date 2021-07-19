const { User } = require("../models");
const { dataUsers } = require("../partials/users");

module.exports = {
  viewSignIn: (req, res) => {
    res.render("index");
  },
  signIn: (req, res) => {
    const data = dataUsers();
    for (const user of data) {
      const { email, password } = req.body;

      if (user.superUser === true && user.email === email && user.password === password) {
        res.redirect("/admin/dashboard");
      } else if (user.superUser === false && user.email === email && user.password === password) {
        res.redirect("/admin/homepage");
      }
    }
  },
  viewHomepage: (req, res) => {
    res.render("game/index");
  },
  viewGame: (req, res) => {
    res.render("game/game");
  },
  viewDashboard: (req, res) => {
    User.findAll().then((user) =>
      res.render("admin/dashboard/view_dashboard", {
        user,
      })
    );
  },
  viewUsers: (req, res) => {
    User.findAll().then((user) =>
      res.render("admin/users/view_users", {
        user,
      })
    );
  },
  addUser: (req, res) => {
    User.create({
      username: req.body.username,
      password: req.body.password,
    }).then(() => res.redirect("/admin/users"));
  },
  showEditUser: (req, res) => {
    User.findOne({
      where: { id: req.params.id },
    }).then((user) =>
      res.render("admin/users/view_edit_user", {
        user,
      })
    );
  },
  editUser: (req, res) => {
    User.update(
      {
        username: req.body.username,
        password: req.body.password,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    ).then(() => res.redirect("/admin/users"));
  },
  deleteUser: (req, res) => {
    User.destroy({
      where: { id: req.params.id },
    }).then(() => res.redirect("/admin/users"));
  },
};
