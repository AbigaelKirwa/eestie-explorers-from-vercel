import Footer from "@/components/Footer"
import Heading from "@/components/Heading"
import Navbar from "@/components/Navbar"
import React from "react"
import Image from "next/image"
import About from "@/components/images/AboutPage/about.png"
import Abigael from "@/components/images/AboutPage/abigael.png"
import Cris from "@/components/images/AboutPage/cris.png"
import Natalie from "@/components/images/AboutPage/natalie.png"
import Virginia from "@/components/images/AboutPage/virginia.png"
import Kigen from "@/components/images/AboutPage/kigen.png"

const TeamData = [
  {
    id: 1,
    name: "Abigael Kirwa",
    position: "Designer and Developer",
    image: Abigael,
    description:
      "Abigael is a software developer with a passion for creating user-friendly applications. She has experience in full-stack development and is always looking for ways to improve her skills.",
  },
  {
    id: 2,
    name: "Crispus Nzano",
    position: "Full Stack Developer",
    image: Cris,
    description:
      "Crispus is a dedicated software developer who excels in crafting intuitive and efficient applications. With a solid background in full-stack development, he continuously seeks opportunities to enhance his expertise.",
  },
  {
    id: 3,
    name: "Natalie Ndetei",
    position: "Full Stack Developer",
    image: Natalie,
    description:
      "Natalie is a talented software engineer with a knack for developing seamless and innovative applications. She has extensive experience in both front-end and back-end development and is committed to advancing her technical skills.",
  },
  {
    id: 4,
    name: "Virginia Wanjiru",
    position: "Designer and Database Manager",
    image: Virginia,
    description:
      "Virginia is a skilled designer and database manager, known for her ability to create visually appealing designs while efficiently managing complex data systems. She has a strong background in both design and database management, constantly seeking to improve and innovate in her field.",
  },
  {
    id: 5,
    name: "Emmanuel Kigen",
    position: "Project Manager and Developer",
    image: Kigen,
    description:
      "Kigen is an experienced project manager and developer who excels in leading teams to successfully complete complex projects. He combines his development expertise with strong management skills to ensure seamless project execution and continuous improvement.",
  },
]

export default function page() {
  return (
    <div>
      <Navbar />
      <div className="text-center">
        <Heading
          underlinedText="About"
          otherText=" Us"
        />
      </div>
      <div className="flex px-16 mt-10">
        <div className="w-full">
          <Image
            src={About}
            alt="tallinn at night"
          />
        </div>
        <div className="w-full flex flex-col align-middle justify-center">
          <div className="px-10">
            <div>
              <p className="text-[#F57906]">Why choose us?</p>
              <h1 className="font-bold text-3xl leading-relaxed">
                Choose Eestie Explorer To Experience Estonia
              </h1>
            </div>
            <div className="mt-3">
              <p className="text-sm text-justify">
                At Eestie Explorers,we offer you a customized experience for
                viewing Tallinn. Get to choose up to 5 places that you would
                like to visit around Tallinn, choose the tour guide you would
                like to have for your visit, pay and voila! You are all ready to
                view Estonia in a manner customized especially to you. We treat
                our clients with the utmost care and ensure the trip is secure
                and pleasant. We wish to leave a memorable impression of magical
                Tallinn. We look forward to having you use our services.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-14">
        <h1 className="font-bold text-3xl leading-relaxed">Meet the team</h1>
        <p className="text-[#F57906]">Here is a bit about us</p>
      </div>
      <div className="custom-grid mt-10 gap-x-10 gap-y-10 mb-20 px-5">
        {TeamData.map(employee => (
          <div
            key={employee.id}
            className="item flex flex-col items-center shadow-xl shadow-gray-300 border py-7"
          >
            <Image
              src={employee.image}
              alt={employee.name}
              className="rounded-full"
              width={200}
              height={200}
            />
            <h1 className="font-bold text-2xl pt-2">{employee.name}</h1>
            <p className="text-[#F57906] text-sm">{employee.position}</p>
            <p className="text-justify px-14 pt-3 text-sm">
              {employee.description}
            </p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  )
}
