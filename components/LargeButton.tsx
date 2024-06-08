import React from "react"

export default function LargeButton({
  children,
  onClick,
}: {
  children: React.ReactNode
  onClick?: () => void
}) {
  return (
    <>
    <a href="/payments">
      <button
        onClick={onClick}
        className="text-sm bg-[#F57906] px-20 py-5 rounded-[7px] text-white font-semibold"
      >
        {children}
      </button>
      </a>
    </>
  )
}
