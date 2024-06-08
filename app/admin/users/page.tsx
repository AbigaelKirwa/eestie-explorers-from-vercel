"use client"
import SideBar from "@/components/Admin/SideBar"
import TopCards from "@/components/Admin/TopCards"
import TopNav from "@/components/Admin/TopNav"
import Users from "@/components/Admin/users/Users"

export default function users() {
  return (
    <div className="flex">
      <SideBar />
      <div
        id="main"
        className="rounded-3xl -ml-5 bg-white w-full pl-5">
        <TopNav />
        <TopCards />
        <Users/>
      </div>
    </div>
  )
}
