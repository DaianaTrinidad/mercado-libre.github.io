const { Router } = require("express");
const mainController = require("../controllers/main-controller");

const router = Router();

router.get("/", mainController.home);
router.get("/login" , mainController.login);
router.get("/register", mainController.register);
router.get("/detail/:id", mainController.detail);


module.exports = router;