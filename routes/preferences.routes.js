const { Router } = require("express");
const preferencesControllers = require("../controllers/preferences.controllers");
const router = Router();

router.post("/preferences", preferencesControllers.postPreferences);

module.exports = router;
