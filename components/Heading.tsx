import React from "react"

export default function Heading({
  underlinedText,
  otherText,
}: {
  underlinedText: React.ReactNode
  otherText: React.ReactNode
}) {
  return (
    <h1 className="text-6xl font-bold leading-normal">
      <span className="underline underline-offset-4 decoration-[#F57906]">
        {underlinedText}
      </span>
      {otherText}
    </h1>
  )
}
