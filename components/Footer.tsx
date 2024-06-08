import React from "react"
import { FaLocationDot } from "react-icons/fa6"
import { IoMdMail } from "react-icons/io"
import { FaPhoneAlt } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-[#F57906] text-white px-44 py-16">
      <div className="grid grid-cols-3 gap-10">
        <div className="text-justify">
          <h1 className="text-2xl font-bold">Travel</h1>
          <p className="text-xs pt-5">
            Explore the world with our exclusive travel packages designed to
            create unforgettable memories. Whether you're dreaming of a tropical
            beach getaway, a thrilling adventure in the mountains, or a cultural
            journey through historic cities, we have the perfect itinerary for
            you.
          </p>
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-bold">Services</h1>
          <ul className="list-none text-xs font-semibold pt-3">
            <li className="py-1">About Us</li>
            <li className="py-1">Destinations</li>
            <li className="py-1">Services</li>
            <li className="py-1">Our Blog</li>
            <li className="py-1">Contact Us</li>
          </ul>
        </div>
        <div>
          <h1 className="text-2xl font-bold pb-5">Contact</h1>
          <div className="flex gap-3">
            <FaLocationDot />
            <p className="text-xs">Anyware, any rode, nr xyz, india</p>
          </div>
          <div className="flex gap-3 pt-5">
            <FaPhoneAlt />
            <p className="text-xs">+91 9876543210</p>
          </div>
          <div className="flex gap-3 pt-5">
            <IoMdMail />
            <p className="text-xs">eestie.explorers@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="text-center pt-20">
        <p className="text-sm">eestie-explorer&#169;2024 all rights reserved</p>
      </div>
    </footer>
  )
}
