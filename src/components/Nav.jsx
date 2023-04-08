import React from "react"

export default function Nav() {
  return (
    <div className="flex justify-center w-[100%] z-50 fixed">
      <div className="flex flex-row w-5/6 items-center justify-between mx-auto h-16 border-b-2 border-black">
        <a href="#top-section"><h1 className="hover:text-gray-400 font-bold text-[1.5rem]">geeb.eth.limo</h1></a>
        <div className="flex flex-row space-x-16">
          <a className="hover:text-gray-400 font-bold text-[1.5rem]" href="#about-section">about</a>
          <a className="hover:text-gray-400 font-bold text-[1.5rem]" href="#contact-section">contact</a>
        </div>
      </div>
    </div>
  )
}