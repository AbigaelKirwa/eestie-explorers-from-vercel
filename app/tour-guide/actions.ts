"use server"

import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"

const supabase = createClient()

export async function guideRead() {
  const { data, error } = await supabase.from("tour_guides").select("*")
  if (error) {
    console.error("Error fetching record:", error.message)
  } else {
    console.log("Record fetched successfully!")
    return data
  }
}

export async function updateCart(user_id: string, tour_guide_id: string) {
  const { data, error } = await supabase
    .from("cart")
    .update({ tour_guide_id: tour_guide_id })
    .eq("user_id", user_id)

  if (error) {
    console.error("Error updating record:", error.message)
  } else {
    console.log(data)
    redirect("/billing")
    return data
  }
}
