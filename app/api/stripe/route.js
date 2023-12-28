import { NextResponse } from "next/server";
import Stripe from "stripe";

//const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET);

export async function POST(req) {
  const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET);
  const items = await req.json();
  const origin = process.env.NEXT_PUBLIC_APP_DOMAIN;
  console.log(origin);

  const lineItems = items.map((item) => {
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
  });

  const params = {
    submit_type: "pay",
    mode: "payment",
    payment_method_types: ["card"],
    billing_address_collection: "auto",
    //shipping_options: [{ shipping_rate: "shr_1Kn3IaEnylLNWUqj5rqhg9oV" }],
    line_items: lineItems,
    success_url: `${origin}/stripe/success`,
    cancel_url: `${origin}/stripe/cancel`,
  };

  // Create Checkout Sessions from body params.
  const session = await stripe.checkout.sessions.create(params);
  return NextResponse.json(session);
}
