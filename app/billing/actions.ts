"use server"
import { createClient } from "@/utils/supabase/server"

const supabase = createClient()

export async function readBilling(user_id: string) {
  try {
    let { data: billing, error } = await supabase
      .from("cart")
      .select("*")
      .eq("user_id", user_id)

    if (billing) {
      const destinationsID = billing.map(
        billingData => billingData.destination_id,
      )
      const tourGuideID = billing.map(billingData => billingData.tour_guide_id)

      let { data: destData, error: destError } = await supabase.from("destinations").select("price").in("destinations_id", destinationsID)

    let { data: tourGuideData, error: tourGuideError } = await supabase
          .from("tour_guides")
          .select("fee")
          .in("tourGuides_id", tourGuideID)

      if (destError) {
        throw new Error(destError.message)
    }else if (tourGuideError) {
        throw new Error(tourGuideError.message)
    }
    else {
        // destData?.map(destDetail => {
        let sum = 0
        if (destData && tourGuideData) {
            // iterate over each item in the array
            for (let i = 0; i < destData.length; i++) {
                sum += destData[i].price // Access the 'price' property of each 'destData' element
            }
            console.log(sum)
            console.log(tourGuideData[0].fee)

            const guide = tourGuideData[0].fee
            return {sum, guide} // Add a comma after 'sum'
        }

        // })
    

        
      }
    }
  } catch (error) {
    throw new Error("Error fetching billing")
  }
}
