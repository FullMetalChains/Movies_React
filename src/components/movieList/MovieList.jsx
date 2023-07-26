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
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=${import.meta.env.VITE_TMDB}`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
    }


    return (
        <div>MovieList</div>
    )
}

export default MovieList