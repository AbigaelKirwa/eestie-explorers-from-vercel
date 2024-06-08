import {IoLocationOutline} from "react-icons/io5"
import {FaArrowTrendUp} from "react-icons/fa6"
import {FaArrowTrendDown} from "react-icons/fa6"
import {BsGraphUpArrow} from "react-icons/bs"
import {IoDocumentOutline} from "react-icons/io5"
import {BsFillPeopleFill} from "react-icons/bs"

export default function () {
  const cardDetails = [
    {
      id: 1,
      name: "Destinations",
      value: "25.1 K",
      color: "#B5FFCE",
      icon: <IoLocationOutline className="mt-2 text-lg" />,
      trendIcon: <FaArrowTrendUp className="text-[#43BE83] text-sm" />,
      trendValue: "+15%",
      trendColor: "#6AD2A0",
    },
    {
      id: 2,
      name: "Payments",
      value: "€ 2,435",
      color: "#FFD9D7",
      icon: <BsGraphUpArrow className="mt-2 text-lg" />,
      trendIcon: <FaArrowTrendDown className="text-[#EA8F95] text-sm" />,
      trendValue: "-5%",
      trendColor: "#EA8F95",
    },
    {
      id: 3,
      name: "Users",
      value: "3.5 M",
      color: "#B5FFCE",
      icon: <IoDocumentOutline className="mt-2 text-lg" />,
      trendIcon: <FaArrowTrendUp className="text-[#43BE83] text-sm" />,
      trendValue: "+15%",
      trendColor: "#6AD2A0",
    },
    {
      id: 4,
      name: "Tour Guides",
      value: "100",
      color: "#B5FFCE",
      icon: <BsFillPeopleFill className="mt-2 text-lg" />,
      trendIcon: <FaArrowTrendUp className="text-[#43BE83] text-sm" />,
      trendValue: "+10%",
      trendColor: "#6AD2A0",
    },
  ]
  return (
    <div
      id="cards"
      className="flex gap-5 px-5">
      {cardDetails.map(card => (
        <div
          className="border-[1.3px] rounded-xl px-7 py-3 border-[#D3CBFB]"
          key={card.id}>
          <div className="flex align-middle justify-between gap-20">
            <div>
              <p className="text-xs text-gray-500">{card.name}</p>
              <h3 className="text-xl font-semibold mt-1">{card.value}</h3>
            </div>
            <div>{card.icon}</div>
          </div>
          <div className="flex gap-3 mt-1">
            <div
              className="opacity-100 rounded-full p-1"
              style={{backgroundColor: card.color}}>
              {card.trendIcon}
            </div>
            <div>
              <p
                className="text-xs mt-1  text-[#6AD2A0] font-semibold"
                style={{color: card.trendColor}}>
                {card.trendValue}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
