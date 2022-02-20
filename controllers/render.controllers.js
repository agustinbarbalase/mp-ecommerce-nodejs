const path = require("path");
const fs = require("fs");

module.exports = {
  renderHome: (req, res) => {
    const { statusPayment } = req.query;

    const textProducts = fs.readFileSync(
      path.join(__dirname, "../products.json"),
      "utf-8"
    );

    const products = JSON.parse(textProducts)
      .map((item) => {
        return {
          ...item,
          picture_url: `${require("../config").domain}/assets/img/${item.img}`,
        };
      })
      .map((item) => {
        delete item.img;
        return item;
      });

    res.render("home", {
      dataItem: products,
      [statusPayment]: statusPayment ? statusPayment : "",
    });
  },
  renderDetails: (req, res) => {
    res.render("detail", req.query);
  },
};
