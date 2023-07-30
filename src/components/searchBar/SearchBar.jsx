import React from 'react';
import './SearchBar.css';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const SearchBar = () => {
    const [movieQuery, setmovieQuery] = useState([]);


  return (
    <div className="search-container">
        <input type="text" name="search" placeholder="Search..." className="search-input" onChange={q=> setmovieQuery(q.target.value)}/>
        <Link to = {`/query/${movieQuery}`} style = {{textDecoration:"none"}}>
            <i className="fas fa-search icon-color"></i>      
        </Link>
    </div>
  )
}

export default SearchBar