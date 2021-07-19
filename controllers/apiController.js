const { User, Biodata, History } = require("../models");
const history = require("../models/history");

module.exports = {
  apiUser: (req, res) => {
    User.findAll({ include: [Biodata, History] }).then((user) => res.status(200).json(user));
  },
  addApiUser: (req, res) => {
    User.create({
      username: req.body.username,
      password: req.body.password,
    }).then((user) => res.status(201).json(user));
  },
  editApiUser: (req, res) => {
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
    ).then(() => res.status(200).json("Data berhasil di update"));
  },
  deleteApiUser: (req, res) => {
    User.destroy({
      where: { id: req.params.id },
    }).then(() => res.status(202).json("Data user berhasil dihapus"));
  },
  apiBiodata: (req, res) => {
    Biodata.findAll({ include: User }).then((biodata) => res.status(200).json(biodata));
  },
  apiHistory: (req, res) => {
    History.findAll({ include: User }).then((history) => res.status(200).json(history));
  },
};
