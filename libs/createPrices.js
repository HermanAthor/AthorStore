const { default: Stripe } = require("stripe");

const createPrices = async (products) => {
  const pricePromises = products.map(async (product) => {
    const price = await Stripe.prices.create({
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
