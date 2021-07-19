const router = require("express").Router();
const adminController = require("../controllers/adminController");

router.get("/signin", adminController.viewSignIn);
router.post("/signin", adminController.signIn);
router.get("/homepage", adminController.viewHomepage);
router.get("/homepage/game", adminController.viewGame);
router.get("/dashboard", adminController.viewDashboard);
router.get("/users", adminController.viewUsers);
router.post("/users", adminController.addUser);
router.get("/users/edit/:id", adminController.showEditUser);
router.post("/users/edit/:id", adminController.editUser);
router.delete("/users/:id", adminController.deleteUser);

module.exports = router;
