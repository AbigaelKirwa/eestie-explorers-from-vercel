"use client"
import Footer from "@/components/Footer"
import Heading from "@/components/Heading"
import Navbar from "@/components/Navbar"
import React, { useEffect, useState } from "react"
import Image from "next/image"
import { BiWorld } from "react-icons/bi"
import { RiMoneyEuroBoxLine } from "react-icons/ri"
import { guideRead, updateCart } from "../tour-guide/actions"
import { createClient } from "@/utils/supabase/client"

export default function Guides() {
  const [guides, setGuides] = useState<any>([])
  const supabase = createClient()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await guideRead()
        setGuides(response)
        console.log(response)
      } catch (error) {
        throw new Error("Error fetching tour guides")
      }
    }
    fetchData()
  }, [])

  const handleUpdate = async (tour_guide_id: string) => {
    const { data, error } = await supabase.auth.getUser()
    if (data.user) {
      try {
        const cartUpdate = await updateCart(data.user.id, tour_guide_id)
      } catch (error) {
        console.error("Error updating cart")
      }
    }
  }
  return (
    <>
      <Navbar />

      <div className="text-center mt-5">
        <Heading
          underlinedText="Tour"
          otherText=" Guides"
        />
      </div>

      <div className="px-20 grid grid-cols-3 gap-x-10 gap-y-16 py-14">
        {guides.map((guides: any) => (
          <div
            className="px-5 py-5 bg-white border-[1.5px] rounded-xl"
            key={guides.tourGuides_id}>
            <div className="flex align-middle  justify-center">
              <Image
                alt="tour guide"
                src={guides.image_path}
                width={300} // Set the appropriate width
                height={100} // Set the appropriate height
              />
            </div>
            <h1 className="text-sm font-bold pt-5">
              {guides.first_name} {guides.last_name}
            </h1>
            <div className="justify-between">
              <div className="flex gap-5 text-sm pt-3">
                <div className="pt-1">
                  <BiWorld />
                </div>

                <p>Langauges: {guides.languages}</p>
              </div>

              <div className="flex gap-5 text-sm pt-3">
                <div className="pt-1">
                  <RiMoneyEuroBoxLine />
                </div>

                <p>Fee: {guides.fee}€ </p>
              </div>
            </div>
            <div className="pt-5">
              {/* <a href="/billing"> */}
              <button
                onClick={() => handleUpdate(guides.tourGuides_id)}
                className="bg-[#F57906] w-full py-2 rounded-md text-sm text-white font-bold">
                Book Now
              </button>
              {/* </a> */}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  )
}
