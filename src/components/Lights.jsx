import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import anime from './lottie-files/movie-title.json';


function Lights() {

    const container = useRef(null)
  
    useEffect(() => {
      const instance = lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        animationData: anime
      });
      return () => instance.destroy();
    }, [])
  
    return (
      <>
        <div>
        <div className="container" ref={container} style = {{width : "15%", height :"15%"}}></div>
        </div>
      </>
    );
  }
  
  export default Lights;