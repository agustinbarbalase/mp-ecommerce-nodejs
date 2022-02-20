const { Router } = require("express");
const renderControllers = require("../controllers/render.controllers");
const router = Router();

router.get("/", renderControllers.renderHome);
router.get("/detail", renderControllers.renderDetails);

module.exports = router;