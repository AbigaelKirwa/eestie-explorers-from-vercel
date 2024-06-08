"use client"
import { Button } from "@/components/ui/button"
import Navbar from "../../components/Navbar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { createClient } from "@/utils/supabase/client"
import { useState, useEffect } from "react"
import { User } from "@supabase/supabase-js"

export default function Profile() {
  const [user, setUser] = useState<User | null>(null)
  const supabase = createClient()

  //checking if user is authenticated
  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser()
      if (data) {
        setUser(data.user)
        console.log(user?.user_metadata.full_name)
      } else {
        throw error
      }
    }
    fetchUser()
  }, [])

  return (
    <>
      <Navbar />
      {user ? (
        <div className="w-full h-screen  mt-7 ">
          <div className="flex gap-16 shadow-2xl mx-40 py-10">
            <div className="pl-5 pr-0 border-r-2 border-[#F4F4F5]">
              <div className="w-[300px]">
                <div className="flex align-middle justify-center">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src={user.user_metadata.picture} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>

                <div className="text-center">
                  <h1 className="font-semibold text-xl">
                    {user.user_metadata.full_name}
                  </h1>
                </div>
                <div className="mt-5">
                  <nav>
                    <ul>
                      <li className="py-5 bg-[#F57906] text-white text-sm pl-5">
                        Profile Information
                      </li>
                      <li className="py-5 text-sm pl-5">Booking History</li>
                      <li className="py-5 text-sm pl-5">
                        Newsletter Subscription
                      </li>
                      <li className="py-5 text-sm pl-5">
                        Manage Notifications
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className="w-[50%] mt-5 ml-10">
              <div>
                <h1 className="font-semibold text-lg">Personal Information</h1>
              </div>
              <div>
                <form action="">
                  <div className="mt-3">
                    <label
                      className="font-semibold text-sm"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder={user.user_metadata.full_name}
                      className="w-full bg-[#F4F4F5] placeholder-[#495560] text-sm px-4 py-3 mt-1"
                    />
                  </div>

                  {/* <div className="mt-3">
                                    <label className="font-semibold text-sm" htmlFor="name">Date of Birth</label>
                                    <input type="date" name="date" id="date" placeholder="15/03/1886" className="w-full bg-[#F4F4F5] placeholder-[#495560] text-sm px-4 py-3 mt-1" />
                                </div> */}

                  <div className="mt-3">
                    <label
                      className="font-semibold text-sm"
                      htmlFor="name"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      placeholder={user.user_metadata.phone}
                      className="w-full bg-[#F4F4F5] placeholder-[#495560] text-sm px-4 py-3 mt-1"
                    />
                  </div>

                  <div className="mt-3">
                    <label
                      className="font-semibold text-sm"
                      htmlFor="name"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder={user.user_metadata.email}
                      className="w-full bg-[#F4F4F5] placeholder-[#495560] text-sm px-4 py-3 mt-1"
                    />
                  </div>

                  <div className="mt-5">
                    <Button
                      type="submit"
                      style={{ backgroundColor: "#F57906", color: "white" }}
                      className="bg-[#F57906] text-white mt-5 rounded-none px-20 py-7"
                    >
                      Save Changes
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <p>user not found</p>
        </div>
      )}
    </>
  )
}
