const Router = require("express");
const router = new Router();
const brandController = require("../controllers/brandControllers");
const checkRole = require("../middleware/checkRoleMiddlware");

router.post("/", checkRole("ADMIN"), brandController.create);
router.get("/", brandController.getAll);

module.exports = router;
