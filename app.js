const express = require("express");
const exphbs = require("express-handlebars");
const PORT = process.env.PORT || 3000;

const app = express();

app.engine(
  "handlebars",
  exphbs({
    extname: ".hbs",
  })
);
app.set("view engine", "handlebars");

app.use(express.static("assets"));

app.use("/assets", express.static(__dirname + "/assets"));

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/detail", function (req, res) {
  res.render("detail", req.query);
});

app.listen(port, () => {
  console.log(`Server on port ${PORT}`);
});
