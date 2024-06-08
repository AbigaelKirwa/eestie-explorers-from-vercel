"use server"

import { createClient } from "@/utils/supabase/server"
//import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
//import { Button } from "@/components/ui/button";

const supabase = createClient()

export async function userDelete({ id }: { id: number }) {
  const { error } = await supabase.from("users").delete().eq("id", id)
  if (error) {
    console.error("Error deleting record:", error.message)
  } else {
    console.log("Record deleted successfully!")
  }
}

export async function userEdit({
  id,
  phone,
  date,
}: {
  id: number
  phone: string
  date: string
}) {
  const { error } = await supabase
    .from("users")
    .update({ phone_number: phone, date_of_birth: date })
    .eq("user_id", id)
  if (error) {
    console.error("Error updating record:", error.message)
  } else {
    console.log("Record updated successfully!")
  }
}

export async function userRead({ id }: { id: number }) {
  const { data, error } = await supabase
    .from("users")
    .select()
    .eq("user_id", id)
  if (error) {
    console.error("Error fetching record:", error.message)
  } else {
    console.log("Record fetched successfully!")
    return data
  }
}
