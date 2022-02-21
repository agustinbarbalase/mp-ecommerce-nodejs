const path = require("path");
const fs = require("fs");

module.exports = {
  renderHome: (req, res) => {
    const { statusPayment, payment_id } = req.query;

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

    res.render("home", {
      dataItem: products,
      [statusPayment]: statusPayment ? statusPayment : "",
      payment_id: payment_id ? payment_id : false
    });
  },
  renderDetails: (req, res) => {
    res.render("detail", req.query);
  },
};
