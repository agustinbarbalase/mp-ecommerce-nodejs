const { Router } = require("express");
const webhookControllers = require("../controllers/webhook.controllers");
const router = Router();

router.post('/webhook', webhookControllers.postWebhook);

module.exports = router;