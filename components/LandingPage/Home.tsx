import HeroImage from "@/components/images/LandingPage/hero-image.png"
import Image from "next/image"
import MediumButton from "@/components/MediumButton"

export default function Home() {
  return (
    <section
      className="px-24 flex justify-between"
      id="home"
    >
      <div
        id="words_left"
        className="w-[50%] pt-24"
      >
        <h1 className="text-6xl font-bold leading-normal">
          <span className="underline underline-offset-4 decoration-[#F57906]">
            Let's
          </span>{" "}
          Create A Memorable Journey
        </h1>
        <div className="pr-10">
          <p className="text-sm leading-loose pt-3">
            Eestie Explorer helps you discover magical places in Estonia and
            allows you to customize the places you would like to visit.
          </p>
        </div>
        <div className="pt-5">
          <MediumButton>
            <a href="/about">Learn more</a>
          </MediumButton>
        </div>
      </div>
      <div className="w-[45%]">
        <Image
          src={HeroImage}
          alt="snow"
        />
      </div>
    </section>
  )
}
