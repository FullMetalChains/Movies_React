// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from "./components/Header/Header"
import Home from "./pages/Home/Home"
import MovieList from './components/movieList/MovieList'
import Movie from './pages/MovieDetail/Movie'

function App() {

  return (
    <>
         <div className="App">
          <Router>
            <Header/>
            <Routes>
              <Route index element = {<Home/>}></Route>
              <Route path = "/movie/:id" element = { <Movie/> }></Route>
              <Route path = "movies/:type" element = {<MovieList/>}></Route>
              <Route path = "query/:query" element = "dfsfdsfdf"></Route>
              <Route path = "/*" element = {<h1>This route doesn&apos;t exist</h1>}></Route>
            </Routes>
          </Router>
         </div>
    </>
  )
}

export default App
