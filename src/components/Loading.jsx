import React, { useEffect, useRef} from 'react';
import lottie from 'lottie-web';
import anime from './lottie-files/load.json';


function Loading() {

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
      <div className="container ml-10" ref={container} style = {{width : "40%", height :"40%", color: "black"}}></div>
    </>
  );
}

export default Loading;