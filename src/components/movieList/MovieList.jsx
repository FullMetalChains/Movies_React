import React from 'react'
import "./MovieList.css"
import Card from '../card/Card'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const MovieList = () => {
    const [movieList, setMovieList] = useState([])
    const {type} = useParams()

    useEffect(()=>{
        getData();
    },[])

    useEffect(()=>{
        getData();
    },[type])

    const getData = () => {
        // const url = 
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=${import.meta.env.VITE_TMDB}`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
        // .then(console.log(movieList))
    }


    return (
        <div className="movie__list">
            <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()} </h2>
            <div className="list__cards">
                {  
                    movieList.map(movie => (
                        <Card key = {`${movie.id}`}     movie = {movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList