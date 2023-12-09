import { NextResponse } from "next/server";
import Stripe from "stripe";

//const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET);

export async function POST(req) {
  const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET);
  const items = await req.json();
  const origin = req.headers.get("origin");
  console.log(origin);

  // const lineItems = items.map((item) => {
  // });

  const params = {
    submit_type: "pay",
    mode: "payment",
    payment_method_types: ["card"],
    billing_address_collection: "auto",
    //shipping_options: [{ shipping_rate: "shr_1Kn3IaEnylLNWUqj5rqhg9oV" }],
    line_items: items?.map((item) => {
      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: item.title,
            images: [item.image],
          },
          unit_amount: item.price * 100,
        },
        adjustable_quantity: {
          enabled: true,
          minimum: 1,
        },
        quantity: item.quantity,
      };
    }),
    success_url: `${origin}`,
    cancel_url: `${origin}`,
  };

  // Create Checkout Sessions from body params.
  const session = await stripe.checkout.sessions.create(params);
  return NextResponse.json(session);
}
