const { Router } = require("express");
const router = Router();

router.post('/webhook', (req, res) => {
  console.log(req.body);
});

module.exports = router;