"use client"

import { loadStripe } from "@stripe/stripe-js"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { readBilling } from "@/app/billing/actions"
import { createClient } from "@/utils/supabase/client"

const asyncStripe = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "",
)

export default function CheckoutBtn(): JSX.Element {
  const router = useRouter()
  const [destinationFee, setDestinationFee] = useState<number>(0)
  const [tourGuideFee, setTourGuideFee] = useState<number>(0)
  const serviceFee = 5
  const grandTotal = destinationFee + tourGuideFee + serviceFee
  const [isMounted, setIsMounted] = useState(false)

  const supabase = createClient()

  useEffect(() => {
    setIsMounted(true)
    const handleReadBilling = async () => {
      try {
        const { data, error } = await supabase.auth.getUser()
        if (error) {
          throw new Error(error.message)
        }
        const response = await readBilling(data.user.id)
        if (response) {
          setDestinationFee(response.sum)
          setTourGuideFee(response.guide)
        }
      } catch (error) {
        console.log("Error fetching billing")
      }
    }
    handleReadBilling()
  }, [])

  const handler = async () => {
    if (!isMounted) return // Ensure the handler runs only on client side

    try {
      const stripe = await asyncStripe
      const res = await fetch("/api/stripe/session", {
        method: "POST",
        body: JSON.stringify({ amount: grandTotal }),
        headers: { "Content-Type": "application/json" },
      })
      const { sessionId } = await res.json()

      if (stripe) {
        const stripeResult = await stripe.redirectToCheckout({ sessionId })
        if (stripeResult?.error) {
          router.push("/error")
        }
      }
    } catch (err) {
      console.log(err)
      router.push("/error")
    }
  }

  if (!isMounted) {
    return <>
    </>
    console.log("Error") // Render nothing until the component is mounted
  }

  return (
    <button
      onClick={handler}
      className="bg-[#F57906] w-full py-3 rounded-lg text-sm text-white font-bold">
      Checkout €{grandTotal}
    </button>
  )
}


{/*"use client"
import { loadStripe } from "@stripe/stripe-js"
import { useRouter } from "next/navigation"
import { readBilling } from "@/app/billing/actions"
import React, { useEffect, useState, useRef } from "react"

const asyncStripe = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "",
)

export default function CheckoutBtn({ amount = 1 }): JSX.Element {
  const router = useRouter()

  const [billing, setBilling] = useState<any>(null)
  const paymentFormRef = useRef(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    fetchBilling()
  }, [])

const fetchBilling = async () => {
    try {
        const billing = await readBilling('1')
        setBilling(billing)
    } catch (error) {
        console.error("Error fetching billing:", error)
    }
}

  const handler = async () => {
    if (!isMounted) return // Ensure the handler runs only on client side

    try {
      const stripe = await asyncStripe
      const res = await fetch("/api/stripe/session", {
        method: "POST",
        body: JSON.stringify({ amount }),
        headers: { "Content-Type": "application/json" },
      })
      const { sessionId } = await res.json()

      if (stripe) {
        const stripeResult = await stripe.redirectToCheckout({ sessionId })
        if (stripeResult?.error) {
          router.push("/error")
        }
      }
    } catch (err) {
      console.log(err)
      router.push("/error")
    }
  }

  if (!isMounted) {
    return <> </> // Render nothing until the component is mounted
  }

  return (
    <button
      onClick={handler}
      className="bg-[#F57906] w-full py-3 rounded-lg text-sm text-white font-bold">
      Checkout €{billing ? billing[0].amount : 0}
    </button>
  )
}*/}

{
  /*import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/router";
import { billingRead } from "@/app/payments/actions";
import React, { useEffect, useState, useRef } from "react"

const asyncStripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "");

const CheckoutBtn = ({ amount = 1 }) => {
const router = useRouter();

const [billing, setBilling] = useState<any>(null)
  const paymentFormRef = useRef(null)

  useEffect(() => {
    fetchBilling()
  }, [])

  const fetchBilling = async () => {
    try {
      const billing = await billingRead({ id: 1 })
      setBilling(billing)
    } catch (error) {
      console.error("Error fetching billing:", error)
    }
  }

  const handler = async () => {
    try {
    const stripe = await asyncStripe;
    const res = await fetch("/api/stripe/session", {
        method: "POST",
        body: JSON.stringify({
            amount,
        }),
        headers: { "Content-Type": "application/json" },
    });
    const { sessionId } = await res.json();

    const stripeResult = await (stripe && stripe.redirectToCheckout({ sessionId }));
    console.log(stripeResult && stripeResult.error); // Add null check here
    if (stripeResult && stripeResult.error) {
        router.push("/error");
    }
    } catch (err) {
      console.log(err);
      router.push("/error");
    }
  };

  return (
    <button
      onClick={handler}
      className="bg-blue-700 hover:bg-blue-800 duration-200 px-8 py-4 text-white"

    >
      Checkout €{billing ? billing[0].amount : 0}
    
    </button>
  );
};

export default CheckoutBtn;*/
}
