module.exports = {
  postWebhook: (req, res) => {
    console.log(req.body);
    res.status(201).end();
  }
}