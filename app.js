const express = require("express");
const exphbs = require("express-handlebars");
const cors = require("cors");
const { port } = require("./config");

const app = express();

// Config
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// Handlebars
app.engine(".hbs", exphbs.engine({
  extname: '.hbs'
}));
app.set("view engine", ".hbs");

// Setting assets
app.use(express.static("assets"));
app.use("/assets", express.static(__dirname + "/assets"));

// Routes
app.use(require("./routes/render.routes"));
app.use(require("./routes/preferences.routes"));
app.use(require("./routes/webhook.routes"));

app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
