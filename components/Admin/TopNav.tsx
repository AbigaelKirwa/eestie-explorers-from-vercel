'use client'
import React, {useState, useEffect} from "react"
import { User } from "@supabase/supabase-js"
import { createClient } from "@/utils/supabase/client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import MediumButton from "@/components/MediumButton"

export default function TopNav() {
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

  //logout function
  const logOutUser = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      throw error
    } else {
      setUser(null)
    }
  }
  return (
    <div
      id="admin_top_nav"
      className="flex justify-between py-5 px-5"
    >
      <div>
        <h1 className="text-xl font-bold">Overview</h1>
      </div>
      <div>
        {user ? (
          <div className="flex gap-5 -ml-20">
            <a href="/profile">
              <Avatar className="w-10 h-10">
                <AvatarImage src={user.user_metadata.picture} />
                <AvatarFallback className="text-white">
                  {user.user_metadata.full_name.slice(0, 1)}
                </AvatarFallback>
              </Avatar>
            </a>
            <MediumButton onClick={logOutUser}>Log out</MediumButton>
          </div>
        ) : (
          <a href="/login">
            <MediumButton>Sign Up</MediumButton>
          </a>
        )}
      </div>
    </div>
  )
}
