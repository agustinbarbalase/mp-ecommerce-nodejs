const {
  domain,
  accessToken,
  integratorId,
  payer,
  backUrls,
  paymentMethods,
  externalReference,
} = require("../config");
const mercadopago = require("mercadopago");

module.exports = {
  postPreferences: (req, res) => {
    mercadopago.configure({
      access_token: accessToken,
      integrator_id: integratorId,
    });

    mercadopago.preferences
      .create({
        items: [
          {
            ...req.body,
            quantity: Number(req.body.quantity),
            unit_price: Number(req.body.unit_price),
          },
        ],
        payer: payer,
        back_urls: backUrls(domain),
        auto_return: "approved",
        payment_methods: paymentMethods,
        // notification_url: `${domain}/webhook`,
        external_reference: externalReference,
      })
      .then((response) => {
        res.redirect(response.body.init_point);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
