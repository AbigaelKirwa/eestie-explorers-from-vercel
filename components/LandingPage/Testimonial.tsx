import React, { useRef } from "react"
import TestimonialImage1 from "../images/LandingPage/testimonial.png"
import TestimonialImage2 from "../images/LandingPage/testimonial2.png"
import TestimonialImage3 from "../images/LandingPage/testimonial3.png"
import TestimonialPlane from "../images/LandingPage/testimonial-plane.png"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export default function Testimonial() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }))
  const destinationsData = [
    {
      id: 1,
      image: TestimonialImage1,
      name: "Max Skshena",
      origin: "from USA",
      comment:
        "I recently used this app on my first trip to Estonia and was absolutely impressed with the experience. The app was user-friendly, making it incredibly easy to customize our tour based on my interests.",
    },
    {
      id: 2,
      image: TestimonialImage2,
      name: "Sandra Tona",
      origin: "from Kenya",
      comment:
        "I recently visited Estonia for the first time and used this app to plan my trip. I was blown away by the experience! The app was extremely user-friendly, allowing me to easily tailor our tour to match my specific interests.",
    },
    {
      id: 3,
      image: TestimonialImage3,
      name: "Nancy Pedro",
      origin: "from France",
      comment:
        "On my first trip to Estonia, I decided to use this app and was thoroughly impressed. The app was intuitive and user-friendly, making it simple to customize our tour according to my personal preferences.",
    },
  ]
  return (
    <section
      className="w-full px-24 pt-14 flex flex-col align-middle justify-center"
      id="testimonials"
    >
      <div className="flex flex-row justify-between">
        <div>
          <p className="text-[#F57906]">Why choose us?</p>
          <h1 className="font-bold text-3xl leading-relaxed">
            Client Testimonial
          </h1>
        </div>
        <div className="absolute pl-[70%]">
          <Image
            alt="helicopter"
            className="w-[200%]"
            src={TestimonialPlane}
          />
        </div>
      </div>
      <Carousel
        opts={{ align: "start" }}
        className="w-full max-w-small pt-5 border-none"
        plugins={[plugin.current]}
        onMouseEnter={() => plugin.current.stop()}
        onMouseLeave={() => plugin.current.play()}
      >
        <CarouselContent className="-ml-10 border-none">
          {destinationsData.map(({ id, image, name, origin, comment }) => (
            <CarouselItem
              key={id}
              className="pl-10 border-none m-0"
            >
              <div className="pt-5 pl-[10%] flex">
                <div className="w-[35%]">
                  <Image
                    src={image}
                    className="flex float-right rounded-3xl"
                    style={{ boxShadow: "-10px 10px 20px rgba(0, 0, 0, 0.15)" }}
                    alt="snow"
                  />
                </div>
                <div className="border-l-4 border-[#F57906] shadow-2xl px-7 py-7 h-1/2 w-3/5 -ml-4 bg-white mt-[15%]">
                  <h1 className="text-lg">{name}</h1>
                  <p className="text-sm text-[#F57906]">{origin}</p>
                  <p className="pt-5">{comment}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          style={{ backgroundColor: "#F57906", border: "none" }}
          className="text-white"
        />
        <CarouselNext
          style={{ backgroundColor: "#F57906", border: "none" }}
          className="text-white"
        />
      </Carousel>
    </section>
  )
}
