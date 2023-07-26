// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from "./components/Header/Header"
import Home from "./pages/Home/Home"

function App() {

  return (
    <>
         <div className="App">
          <Router>
            <Header/>
            <Routes>
              <Route index element = {<Home/>}></Route>
              <Route path = "movie/:id" element = {<h1>No</h1>}></Route>
              <Route path = "movies/:type" element = {<h1>Yes</h1>}></Route>
              <Route path = "/*" element = {<h1>This route doesn&apos;t exist</h1>}></Route>
            </Routes>
          </Router>
         </div>
    </>
  )
}

export default App
