import { React, useState } from "react"
import home_image from ".././images/bg2.png"
import pfp from ".././images/transparent_pfp.png"

export default function Home() {
  return (
    <div>
      <div className="h-[1050px] flex flex-col" style={{backgroundImage: `url(${home_image})`}} id="background-div">
        <div className="fixed mt-64 mx-auto left-[13%]" >
          <img className="h-80 w-80" src={pfp} id="avatar"/>
        </div>
        {/* <h1 className="fixed right-[35%] top-[35%] text-[2.5rem]" id="heading">geeb.dev</h1> */}
      </div>
      <div className="w-[100%] h-[1250px] bg-slate-200 flex flex-row">
        <div className="w-[40%] mt-48">
          
        </div>
        <div className="w-[60%] mt-48 flex flex-col">
          <h1 className="mx-auto">hello</h1>
        </div>
      </div>
      {/* <div className="h-[1050px] flex flex-col" style={{backgroundImage: `url(${home_image})`}} id="background-div">

      </div> */}
    </div>
  )
}