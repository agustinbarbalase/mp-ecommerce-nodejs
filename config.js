require("dotenv").config();

module.exports = {
  port: 3000 || process.env.PORT,
  domain: process.env.DOMAIN || 'http://localhost:3000',
  accessToken: process.env.ACCESS_TOKEN,
  integratorId: process.env.INTEGRATOR_ID,
  payer: {
    name: "Lalo",
    surname: "Landa",
    email: "test_user_63274575@testuser.com",
    phone: {
      area_code: "11",
      number: 22223333,
    },
    address: {
      street_name: "Falsa",
      street_number: 123,
      zip_code: "1111",
    },
  },
  backUrls: (domain) => {
    return {
      success: `${domain}/?statusPayment=success`,
      failure: `${domain}//?statusPayment=failure`,
      pending: `${domain}//?statusPayment=pending`,
    }
  },
  paymentMethods: {
    excluded_payment_methods: [
      {
        id: "amex",
      },
    ],
    excluded_payment_types: [
      {
        id: "atm",
      },
    ],
    installments: 6,
  },
  externalReference: process.env.EXTERNAL_REFERENCE,
};
