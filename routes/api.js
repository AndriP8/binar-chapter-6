const router = require("express").Router();
const apiController = require("../controllers/apiController");

router.get("/user", apiController.apiUser);
router.post("/user", apiController.addApiUser);
router.post("/user/:id", apiController.editApiUser);
router.delete("/user/:id", apiController.deleteApiUser);
router.get("/biodata", apiController.apiBiodata);
router.get("/history", apiController.apiHistory);

module.exports = router;
