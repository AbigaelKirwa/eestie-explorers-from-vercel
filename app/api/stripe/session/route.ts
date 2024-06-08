"use server"
import { NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY || "", {
  apiVersion: "2024-04-10",
})

export async function POST(req: NextRequest) {
  const { amount } = await req.json()
  const host = process.env.NEXT_PUBLIC_HOST

  try {
    const date = new Date().toISOString()

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: "INV-" + date,
            },
            unit_amount: amount * 100 || 100,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      cancel_url: `${host}`,
      success_url: `${host}/success`,
    })

    return NextResponse.json({ sessionId: session.id })
  } catch (err) {
    console.error(err)
    return NextResponse.json(
      { error: "Error creating checkout session" },
      { status: 500 },
    )
  }
}

export async function GET() {
  return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 })
}
