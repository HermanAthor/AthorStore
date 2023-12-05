const stripe = require("stripe")("your_stripe_secret_key");

const createPrices = async (products) => {
  const pricePromises = products.map(async (product) => {
    const price = await stripe.prices.create({
      unit_amount: product.price * 100,
      currency: "usd",
      product: {
        name: product.title,
        description: product.description,
      },
    });
    return price;
  });
  return Promise.all(pricePromises);
};

module.exports = { createPrices };
