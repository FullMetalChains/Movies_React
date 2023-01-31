import React from 'react'
import { useEffect } from 'react';




const Carousel = () => {

  useEffect(()=>{
    let slidePosition = 0;
    const slides = document.getElementsByClassName('carouselItem');
    const totalSlides = slides.length;

    document.getElementById('carouselnext').addEventListener("click", function(){
        moveToNextSlide();
    })

    document.getElementById('carouselprev').addEventListener("click", function(){
        moveToPrevSlide();
    })
    function updateSlidePosition(){
        for( let slide of slides)
        {
            slide.classList.remove('carouselItemVisible');
            slide.classList.add('carouselItemHidden');
        }
        slides[slidePosition].classList.add('carouselItemVisible');
    }
    const moveToNextSlide =()=>{
        if(slidePosition === totalSlides - 1)
        {
            slidePosition = 0;
        }
        else{
            slidePosition++;
        }
        updateSlidePosition();
    }

    const moveToPrevSlide =()=>{
        if(slidePosition === 0)
        {
            slidePosition = totalSlides - 1 ;
        }
        else{
            slidePosition--;
        }
        updateSlidePosition();
    }


  },[])


  return (
    <>
        <div className="carousel">
            <div className="carouselItem carouselItemVisible">
                <img src="https://picsum.photos/1600/900"/>
            </div>
            <div className="carouselItem">
                <img src="https://picsum.photos/id/237/1600/900"/>
            </div>
            <div className="carouselItem">
                <img src="https://picsum.photos/seed/picsum/1600/900"/>
            </div>
            <div className="carouselActions">
                <button id="carouselprev" aria-label='Previous slide'>{`<`}</button>
                <button id ="carouselnext" aria-label='Nec]xt slide'>{`>`}</button>
            </div>
        </div>
    </>
  )
}

export default Carousel