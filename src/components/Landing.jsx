import React from "react"
import pfp from ".././images/transparent_pfp.png"

export default function Landing() {
  return (
    <div className="h-[100vh] flex flex-col" id="background-div">
      <div className="lg:fixed mt-[65%] lg:mt-[14%] mx-auto left-[15%]" >
        <img className="h-80 w-80" src={pfp} id="avatar"/>
      </div>
      <div className="w-[70%] flex justify-end mt-12 lg:mt-[15%] ml-[12%] lg:ml-24">
        <h1 className="text-[5rem] drop-shadow-lg">geeb.eth.limo</h1>
      </div>
    </div>
  )
}