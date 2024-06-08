import React from "react"

export default function MediumButton({
  children,
  onClick,
}: {
  children: React.ReactNode
  onClick?: () => void
}) {
  return (
    <>
      <button
        onClick={onClick}
        className="text-sm bg-[#43BE83] px-5 py-1 rounded-[10px] text-white font-semibold"
      >
        {children}
      </button>
    </>
  )
}
