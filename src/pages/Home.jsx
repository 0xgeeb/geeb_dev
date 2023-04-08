import React from "react"
import Landing from "../components/Landing"
import About from "../components/About"
import Contact from "../components/Contact"

export default function Home() {

  return (
    <div id="top-section">
      <Landing />
      <About />
      <Contact />
    </div>
  )
}