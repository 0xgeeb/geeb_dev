import React from "react"

export default function Nav() {
  return (
    <div className="flex justify-center w-[100%] z-50 fixed">
      <div className="flex flex-row w-5/6 items-center justify-between mx-auto h-10 border-b-2 border-black">
        <h1>0xgeeb</h1>
        <ul className="flex flex-row space-x-16">
          <li>
            <a className="hover:text-gray-400" href="/">About</a>
          </li>
          <li>
            <a className="hover:text-gray-400" href="/mint">Projects</a>
          </li>
          <li>
            <a className="hover:text-gray-400" href="/about">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  )
}