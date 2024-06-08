"use client"
import { createClient } from "@/utils/supabase/client"
import { useState, useEffect } from "react"
import Image from "next/image"
import Navbar from "@/components/Navbar"
import { FaTrash } from "react-icons/fa"
import Heading from "@/components/Heading"
import { getDestinations, removeDestination } from "./actions"

type Destination = {
  destinations_id: number
  description: string
  name: string
  location: string
  price: string
  image_path: string
}

const CartPage = () => {
  const [destinations, setDestinations] = useState<Destination[]>([])
  const supabase = createClient()

  useEffect(() => {
    const fetchCartData = async ()=>{
      const {data} = await supabase.auth.getUser();
      if(data.user){
        const destinations = await getDestinations(data.user.id)
        if(destinations){
          setDestinations(destinations)
          console.log(destinations)
          return destinations
        }
        else{
          alert("No destinations found in cart")
        }
      }
    }
    fetchCartData();
  }, [])

  const removeDestinationFromCart = async (destination_id:number) => {
    const data = await removeDestination(destination_id)
    const updatedDestinations = destinations.filter(destination=>destination.destinations_id !== destination_id)
    setDestinations(updatedDestinations)
  }

  return (
    <>
      <Navbar />
      <div className="p-6 ">
        <div className="text-center mb-10">
          <Heading underlinedText="Cart" otherText=" Destinations" />
        </div>
        {destinations.map(destination => (
          <div className="mx-32 p-6 mb-10 bg-white border-2 border-white-500 rounded-lg shadow-lg dark:bg-white-800 dark:border-gray-100 flex" key={destination.destinations_id}>
              <img
                src={destination.image_path}
                alt="Old Town gates"
                style={{ width: "150px", height: "150px", borderRadius:"50%", objectFit:"cover", marginTop:"10px"}}
              />
          <div className="flex">
            <div className="pl-4 mt-3">
              <h2 className="text-base font-bold">{destination.name}</h2>
              <p className="text-xs pt-3">{destination.description}</p>
              <p className="text-xs text-black-500 font-bold pt-3">Location: {destination.location}</p>
              <div className="flex gap-3 mt-3">
                <p className="text-black-500 font-bold text-sm">Price of Entry:</p>
                <p className="text-orange-500 font-bold text-sm">{destination.price} €</p>
              </div>
            </div>

            <div className="mt-14 ml-5">
              <button onClick={()=>removeDestinationFromCart(destination.destinations_id)}>
                <FaTrash className="text-orange-500 text-lg content-center justify-items-end " />
              </button>
            </div>
          </div>
          </div>
        ))}
        <br />

        <div className="flex justify-center">
          <a href="/destinations">
          <button className="text-white bg-orange-500 hover:bg-orange-600 font-bold p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
          </a>
        </div>

        <div className="flex justify-center mt-8">
          <a href="/tour-guide">
          <button
            className="text-white bg-orange-500 hover:bg-orange-600 font-bold py-2 px-4 rounded-lg flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 mr-2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            Choose Tour Guide and Checkout
          </button>
          </a>
        </div>
      </div>
    </>
  )
}

export default CartPage