import { React, useState } from "react"
import home_image from ".././images/bg2.png"
import pfp from ".././images/transparent_pfp.png"

export default function Home() {
  return (
    <div>
      <div className="h-[1050px] flex flex-col" style={{backgroundImage: `url(${home_image})`}} id="background-div">
        <div className="fixed mt-64 mx-auto left-36" >
          <img className="h-80 w-80" src={pfp} id="avatar"/>
        </div>
        <h1 className="mt-2 ml-6 mx-auto text-[2.5rem]">geeb.dev</h1>
      </div>
      <div className="h-[250px]">

      </div>
      <div className="h-[1050px] flex flex-col" style={{backgroundImage: `url(${home_image})`}} id="background-div">

      </div>
    </div>
  )
}