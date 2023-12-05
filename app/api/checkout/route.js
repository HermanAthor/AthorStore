const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_SECRET);

export async function POST(req) {
  const items = await req.json();
  console.log(items.cartItems);
  return new Response("Items processed", { status: 200 });
}

// export async function POST(req, res) {
//   const items = req.body.cartItem;
//   console.log(items);
//   const transformedItems = items.map((item) => ({
//     price_data: {
//       currency: "usd",
//       product_data: {
//         name: item.title,
//         images: [req.headers.origin + item.image],
//       },
//       unit_amount: item.price * 100,
//     },
//     quantity: item.quantity,
//   }));

//   try {
//     // Create Checkout Sessions from body params.
//     const session = await stripe.checkout.sessions.create({
//       line_items: transformedItems,
//       mode: "payment",
//       success_url: `${req.headers.origin}/`,
//       cancel_url: `${req.headers.origin}/`,
//     });
//     res.json({ sessionURL: session.url });
//   } catch (err) {
//     console.log(err);
//     res.status(err.statusCode || 500).json(err.message);
//   }
// }
