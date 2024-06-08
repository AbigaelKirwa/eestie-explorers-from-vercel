import React from "react"
import PlaneLeft from "../images/LandingPage/plane-left.png"
import PlaneRight from "../images/LandingPage/plane-right.png"
import Image from "next/image"
import MediumButton from "../MediumButton"

export default function Subscribe() {
  return (
    <section
      id="subscribe"
      className="flex justify-between gap-10 px-10 py-32"
    >
      <div>
        <Image
          src={PlaneLeft}
          alt="aircraft"
        />
      </div>
      <div className="flex flex-col text-center pt-10 px-20">
        <h1 className="text-4xl font-bold">
          Subscribe To Get The Latest News About Us
        </h1>
        <p className="text-sm mt-8 text-gray-500">
          Stay updated with the latest tours and exclusive tips for exploring
          Estonia! Subscribe to our newsletter.
        </p>
        <div className="flex mt-8 align-middle justify-center">
          <input
            type="text"
            className="bg-[#FFB649] rounded-md pl-10 pr-56 py-6 placeholder-white text-sm"
            placeholder="Enter your email"
          />
          <div className="mt-3 absolute ml-[23%]">
            <MediumButton>Subscribe</MediumButton>
          </div>
        </div>
      </div>
      <div>
        <Image
          src={PlaneRight}
          alt="aircraft"
        />
      </div>
    </section>
  )
}
