"use server"
import { createClient } from "@/utils/supabase/server"

const supabase = createClient()
// Fetch destinations for a specific user
export const getDestinations = async (user_id:string) => {
  try {
    const { data:cartData, error:cartError } = await supabase.from("cart").select("*").eq("user_id", user_id)
    if (cartError) {
      console.error("Error fetching record:", cartError.message)
    }

    //extract destination ids from cart data
    if(cartData){
      const destinationId = cartData?.map((cartDetail)=>cartDetail.destination_id)
      const {data:destinationData, error:destinationError}= await supabase.from("destinations").select("*").in("destinations_id", destinationId)
      if(destinationError){
        console.error("Error fetching record:", destinationError.message)
      }
      else{
        console.log("Record fetched successfully!")
        return destinationData
      }
    }
  } catch (error) {
    console.log("There was an error fetching destinations:", error)
  }
}

// Remove destination from cart
export const removeDestination = async (destination_id:number) => {
  try {
    const { error } = await supabase.from("cart").delete().eq("destination_id", destination_id)
    if (error) {
      throw error
    }
  } catch (error) {
    console.log("There was an error removing destination:", error)
  }
}
