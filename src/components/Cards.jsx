import React from 'react';
import { FaPlay } from 'react-icons/fa';

const Cards = () => {
    return (
        <>
        <div className='cardContainerContainer'>
            <div className="cardContainer">
                <div className="row px-xl-5 px lg-0 cardShare">
                    <div className='col-md-4'>
                        <div className ="cardMain">
                            <div className="movieImage">
                                <img src="https://picsum.photos/200/200" alt="" className="cardBack"/>
                                <img src="https://picsum.photos/200/200" alt="" className="cardCover"/>
                                <i class="fa fa-play"><FaPlay/></i>
                            </div>
                            <h6>Movie Name</h6>
                            <img src="https://picsum.photos/20/20"className='cardRating'/>
                            <div className='head1 text-center'>
                                <p>Length</p>
                                <p>Language</p>
                                <p>Rating</p>    
                                <p>Review</p>
                            </div>
                            <div className='head2 text-center'>
                                <p>1234</p>
                                <p>Eng</p>
                                <p>5/5</p>
                                <p>bruh</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-4'>
                        <div className ="cardMain">
                            <div className="movieImage">
                                <img src="https://picsum.photos/200/200" alt="" className="cardBack"/>
                                <img src="https://picsum.photos/200/200" alt="" className="cardCover"/>
                                <i class="fa fa-play"><FaPlay/></i>
                            </div>
                            <h6>Movie Name</h6>
                            <img src="https://picsum.photos/20/20"className='cardRating'/>
                            <div className='head1 text-center'>
                                <p>Length</p>
                                <p>Language</p>
                                <p>Rating</p>    
                                <p>Review</p>
                            </div>
                            <div className='head2 text-center'>
                                <p>1234</p>
                                <p>Eng</p>
                                <p>5/5</p>
                                <p>bruh</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-4'>
                        <div className ="cardMain">
                            <div className="movieImage">
                                <img src="https://picsum.photos/200/200" alt="" className="cardBack"/>
                                <img src="https://picsum.photos/200/200" alt="" className="cardCover"/>
                                <i class="fa fa-play"><FaPlay/></i>
                            </div>
                            <h6>Movie Name</h6>
                            <img src="https://picsum.photos/20/20"className='cardRating'/>
                            <div className='head1 text-center'>
                                <p>Length</p>
                                <p>Language</p>
                                <p>Rating</p>    
                                <p>Review</p>
                            </div>
                            <div className='head2 text-center'>
                                <p>1234</p>
                                <p>Eng</p>
                                <p>5/5</p>
                                <p>bruh</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
  }
  
  export default Cards;