import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./Home"
import WhatWeOffer from "./WhatWeOffer"
import PopularTours from "./PopularTours"
import Hotels from "./Hotels"
import ContactUs from "./ContactUs"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}/>
            <Route index element={<WhatWeOffer />}/>
            <Route index element={<PopularTours />}/>
            <Route index element={<Hotels />}/>
            <Route index element={<ContactUs />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
