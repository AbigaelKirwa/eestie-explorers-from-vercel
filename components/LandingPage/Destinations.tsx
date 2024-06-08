import { useRef } from "react"
import MediumButton from "@/components/MediumButton"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import destination1 from "@/components/images/LandingPage/destination1.png"
import destination2 from "@/components/images/LandingPage/destination2.png"
import destination3 from "@/components/images/LandingPage/destination3.png"
import destination4 from "@/components/images/LandingPage/destination4.png"
import destination5 from "@/components/images/LandingPage/destination5.png"
import destination6 from "@/components/images/LandingPage/destination6.png"
import { Badge } from "@/components/ui/badge"
import { FaStar } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"
import { IoIosArrowForward } from "react-icons/io"

export default function Destinations() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }))
  const destinationsData = [
    {
      id: 1,
      image: destination4,
      title: "Kumu Art Museum",
      price: "15 Euros",
      rating: 5.0,
      ratingCount: 23,
      emoji: "😀",
    },
    {
      id: 2,
      image: destination5,
      title: "Kadriog Park",
      price: "10 Euros",
      rating: 4.0,
      ratingCount: 20,
      emoji: "😽",
    },
    {
      id: 3,
      image: destination6,
      title: "Viru Gate",
      price: "Free Entry",
      rating: 3.0,
      ratingCount: 25,
      emoji: "😍",
    },
    {
      id: 4,
      image: destination1,
      title: "Tallin City Museum",
      price: "10 Euros",
      rating: 4.0,
      ratingCount: 10,
      emoji: "😀",
    },
    {
      id: 5,
      image: destination2,
      title: "Kadriog Park",
      price: "Free Entry",
      rating: 5.0,
      ratingCount: 23,
      emoji: "😽",
    },
    {
      id: 6,
      image: destination3,
      title: "St. Olaf's Church",
      price: "10 Euros",
      rating: 3.0,
      ratingCount: 12,
      emoji: "😍",
    },
  ]
  return (
    <section
      id="destinations"
      className="px-20 py-10"
    >
      <div>
        <p className="text-[#F57906]">Famous Destinations!</p>
        <h1 className="font-bold text-2xl">
          Our Popular <span className="text-[#F57906]">Destinations</span>
        </h1>
      </div>
      <div>
        <Carousel
          opts={{ align: "start" }}
          className="w-full max-w-small pt-5 border-none"
          plugins={[plugin.current]}
          onMouseEnter={() => plugin.current.stop()}
          onMouseLeave={() => plugin.current.play()}
        >
          <CarouselContent className="-ml-10 border-none">
            {destinationsData.map(
              ({ id, image, title, price, rating, ratingCount, emoji }) => (
                <CarouselItem
                  key={id}
                  className="md:basis-1/2 lg:basis-1/3 pl-10 border-none m-0"
                >
                  <div className="p-5">
                    <Card
                      className="border-none rounded-3xl"
                      style={{
                        backgroundColor: "transparent",
                        boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.15)",
                      }}
                    >
                      <div className="w-full">
                        <Image
                          src={image}
                          alt="snow"
                        />
                      </div>
                      <div className="-mt-3">
                        <Badge className="border-none shadow-lg ml-3">
                          <FaStar className="text-yellow-400 text-base" />
                          <div className="flex pt-1 pl-1">
                            <p className="pt-1 pl-1">
                              {rating}.0{" "}
                              <span className="text-gray-500">
                                ({ratingCount})
                              </span>
                            </p>
                            <p className="text-base pl-1">{emoji}</p>
                          </div>
                        </Badge>
                      </div>
                      <div className="bg-white pt-12 pb-10 px-5 -mt-6 rounded-b-3xl">
                        <div className="flex gap-3">
                          <FaLocationDot className="text-gray-700 text-lg" />
                          <p className="text-black font-medium">{title}</p>
                        </div>
                        <div className="pt-3 pl-7">
                          <p className="text-gray-400 text-sm font-medium">
                            <span className="text-[#F57906]">{price}</span> per
                            person
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ),
            )}
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
      </div>
      <div className="flex xl:float-end md:align-middle md:justify-center mt-1 pr-9">
        <MediumButton>
          <a href="/destinations">
            <div className="flex gap-1">
              <p>See All</p>
              <IoIosArrowForward className="text-white font-bold text-base pt-0.5" />
            </div>
          </a>
        </MediumButton>
      </div>
    </section>
  )
}
