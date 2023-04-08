import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./index.css"
import Home from "./pages/Home.jsx"
import Nav from "./components/Nav.jsx"
import Footer from "./components/Footer.jsx"

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-w-screen min-h-screen m-0 p-0 overflow-x-hidden">
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}