import React from "react"
import MediumButton from "../MediumButton"
import Image from "next/image"
import AboutImage from "../images/LandingPage/about.png"

export default function About() {
  return (
    <section
      className="w-full px-24 pt-14 flex justify-between"
      id="home"
    >
      <div
        id="words_left"
        className="w-[50%] pt-3"
      >
        <div>
          <p className="text-[#F57906]">Why choose us?</p>
          <h1 className="font-bold text-3xl leading-relaxed">
            Choose Eestie Explorer To Experience Estonia
          </h1>
        </div>
        <div className="pr-10">
          <p className="text-sm leading-loose pt-3">
            Discover Estonia like never before with our user-friendly app that
            connects you to local guides and customizable tours tailored to your
            interests. We pride ourselves on offering a seamless booking process
            and expert guidance.
          </p>
        </div>
        <div className="pt-5">
          <MediumButton>
            <a href="/about">Learn more</a>
          </MediumButton>
        </div>
        <div className="pt-10 flex gap-24">
          <div>
            <h1 className="text-3xl font-medium">2</h1>
            <p className="text-gray-500 pt-3">
              Years
              <br />
              Experience
            </p>
          </div>
          <div>
            <h1 className="text-3xl font-medium">20+</h1>
            <p className="text-gray-500 pt-3">
              Company
              <br />
              Collaborations
            </p>
          </div>
          <div>
            <h1 className="text-3xl font-medium">67+</h1>
            <p className="text-gray-500 pt-3">
              Satisfied
              <br />
              Customers
            </p>
          </div>
        </div>
      </div>
      <div className="w-[35%]">
        <Image
          src={AboutImage}
          className="flex float-right rounded-3xl"
          style={{ boxShadow: "-10px 10px 20px rgba(0, 0, 0, 0.15)" }}
          alt="snow"
        />
      </div>
    </section>
  )
}
