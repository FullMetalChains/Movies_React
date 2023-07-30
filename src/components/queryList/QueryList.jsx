import React from 'react'
import "./QueryList.css"
import Card from '../card/Card'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const QueryList = () => {
    const [queryList, setQueryList] = useState([])
    const {queryid} = useParams()

    useEffect(()=>{
        getData();
    },[])

    // useEffect(()=>{
    //     getData();
    // },[type])

    const getData = () => {
        // const url = 
        // fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=${import.meta.env.VITE_TMDB}`)
        // .then(res => res.json())
        // .then(data => setMovieList(data.results))
        // .then(console.log(movieList))
        // console.log(queryid)
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB}&query=${queryid}`)
        .then(res => res.json())
        .then(data => setQueryList(data.results))
        .then(console.log(queryList))
    }


    return (
        <div className="query__list">
            <h2 className="list__title">Search results for {((queryid)? queryid : "Can't find" ).toUpperCase()} </h2>
            <div className="list__cards">
                {  
                    queryList.map(movie => (
                        <Card key = {`${movie.id}`}     movie = {movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default QueryList