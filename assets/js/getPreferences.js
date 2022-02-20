window.addEventListener("DOMContentLoaded", () => {
  const id = document.querySelector("#id-product").value;
  const title = document.querySelector("#title").value;
  const currency_id = document.querySelector("#currency-id").value;
  const picture_url = document.querySelector("#picture-url").value;
  const description = document.querySelector("#description").value;
  const quantity = document.querySelector("#quantity").value;
  const unit_price = document.querySelector("#unit-price").value;
  const buttonPay = document.querySelector(".mercadopago-button");

  const productData = {
    id,
    title,
    currency_id,
    picture_url,
    description,
    quantity,
    unit_price,
  };

  buttonPay.addEventListener("click", () => {
    fetch("/preferences", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((res) => res.json())
      .catch((err) => console.error(err));
  });
});
