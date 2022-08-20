import React from "react"

export default function Nav() {
  return (
    <div className="flex justify-center w-[100%] z-50 fixed">
      <div className="flex flex-row w-5/6 items-center justify-between mx-auto h-10 border-b-2 border-black">
        <a href="#top-section"><h1 className="hover:text-gray-400">geeb.dev | 0xgeeb | geeb.eth</h1></a>
        <ul className="flex flex-row space-x-16">
          <li>
            <a className="hover:text-gray-400" href="#about-section">about</a>
          </li>
          <li>
            <a className="hover:text-gray-400" href="#projects-section">projects</a>
          </li>
          <li>
            <a className="hover:text-gray-400" href="#contact-section">contact</a>
          </li>
        </ul>
      </div>
    </div>
  )
}