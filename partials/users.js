const fs = require("fs");

const dataUsers = () => {
  const file = fs.readFileSync("./dataUsers/users.json", "utf-8");
  const users = JSON.parse(file);
  return users;
};
module.exports = { dataUsers };
