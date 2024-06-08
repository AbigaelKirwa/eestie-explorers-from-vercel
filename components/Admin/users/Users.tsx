import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import DeleteButton from "@/components/DeleteButton"

const tourGuides = [
  {
    name: "Nicholas Patrick",
    bookings: 80,
    price: "5 Euros/hr",
    email: "nicola@gmail.com",
    image: "https://avatars.githubusercontent.com/u/1291?v=4",
  },
  {
    name: "Derrick Spencer",
    bookings: 40,
    price: "20 Euros/hr",
    email: "derick@gmail.com",
    image: "https://avatars.githubusercontent.com/u/12423?v=4",
  },
]

export default function users() {
  return (
    <div
      id="tour-guides-section"
      className="mx-5">
      <div className="mt-3 flex flex-col gap-4">
        {tourGuides.map(tourGuide => (
          <div className="border-[1.3px] rounded-lg px-7 py-2  justify-between border-[#D3CBFB] w-[96%] flex gap-15 align-middle justify-center">
            <div>
              <Avatar className="w-7 h-7">
                <AvatarImage
                  src={tourGuide.image}
                  alt="@shadcn"
                />
                <AvatarFallback>AK</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex mt-1 gap-20">
              <p className="text-[#797D8C] text-sm">{tourGuide.name}</p>
              <p className="text-[#797D8C] text-sm">{tourGuide.email}</p>
            </div>
            <div className="flex justify-center gap-2">
            <div>
                <DeleteButton>Delete</DeleteButton>
            </div>

            <div>
                <DeleteButton>Delete</DeleteButton>
            </div>
            </div>


          </div>
        ))}
      </div>
    </div>
  )
}
