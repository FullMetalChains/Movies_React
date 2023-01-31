import React from 'react';
import { Home, Achievements, NotFound} from './pages';
import {Route,Routes} from "react-router-dom";
import {Navbar, Lights} from "./components" 

function App() {
  return (
    <>
    <Navbar/>
    <Lights/>
    <Routes>
        <Route path ="/" element={<Home/>}/>  
        <Route path = "/Achievements">
          <Route index element={<Achievements/>}/>
          <Route path=":id" element={<Achievements/>}/>
        </Route>
        <Route path = "*" element={<NotFound/>}/>
    </Routes>
    </>
  );
}

export default App;