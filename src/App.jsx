import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import anime from './components/lottie-files/load.json';
import {Navbar,Lights, Scontent} from './components'


function App() {

  const container = useRef(null)

  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: anime
    });
    return () => instance.destroy();
  }, [])

  return (
    <>
      <Navbar/>
      <main className='main'>
      <Lights />
      <div className="container mx-auto px-4">
      <div className="container" ref={container} style = {{width : "40%", height :"40%", color: "black" }}></div>
      <Scontent/>
      </div>
      </main>
    </>
  );
}

export default App;