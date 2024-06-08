import Logo from "@/components/images/Admin/logo.png"
import Image from "next/image"
import { RxDashboard } from "react-icons/rx"
import { IoDocumentOutline } from "react-icons/io5"
import { FaEuroSign } from "react-icons/fa"
import { IoIosStar } from "react-icons/io"
import { BsPersonSquare } from "react-icons/bs"

export default function SideBar() {
  return (
    <>
      <div
        id="menu"
        className="bg-[#39393B] w-1/4 h-[100vh] pl-7 pr-12 py-10"
      >
        <div
          id="logo"
          className="flex justify-center"
        >
          <div className="w-6 flex">
            <Image
              src={Logo}
              alt="journey"
            />
          </div>
          <div>
            <p className="text-md font-bold pt-1 pl-3 text-white">
              Eestie<span className="text-[#F57906]">Explorer</span>
            </p>
          </div>
        </div>
        <div>
          <div className="w-full h-0.5 mt-5 bg-[#F57906]"></div>
        </div>
        <div className="mt-14">
          <nav>
            <ul className="list-none flex flex-col gap-7">
              <li className="flex gap-5 pl-5 text-[#F57906] bg-white  py-2 rounded-lg">
                <div className="pt-0.5">
                  <RxDashboard />
                </div>
                <div>
                  <p className="text-sm font-extrabold">Dashboard</p>
                </div>
              </li>
              <li className="flex gap-5 pl-5 text-white">
                <div className="pt-0.5">
                  <IoDocumentOutline />
                </div>
                <div>
                  <p className="text-sm font-medium">Destinations</p>
                </div>
              </li>
              <li className="flex gap-5 pl-5 text-white">
                <div className="pt-0.5">
                  <FaEuroSign />
                </div>
                <div>
                  <p className="text-sm font-medium">Payments</p>
                </div>
              </li>
              <li className="flex gap-5 pl-5 text-white">
                <div className="pt-0.5">
                  <BsPersonSquare />
                </div>
                <div>
                  <p className="text-sm font-medium">Tour Guides</p>
                </div>
              </li>
              <li className="flex gap-5 pl-5 text-white">
                <div className="pt-0.5">
                  <IoIosStar />
                </div>
                <div>
                  <p className="text-sm font-medium">Users</p>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}
