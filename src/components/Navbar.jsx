import React from 'react';
import { FaFilm,FaTrophy,FaHistory,FaCog, FaMoon, FaSearch } from 'react-icons/fa';
import {Link} from "react-router-dom"


const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul className='navbar-nav'>
                <li className='logo'>
                    <Link to="/" className='nav-link'>
                        <FaFilm/>
                        <span className="link-text">
                            Movies
                        </span>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="#" className='nav-link'>
                        <FaSearch/>
                        <span className="link-text">
                            Search
                        </span>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="Achievements" className='nav-link'>
                        <FaTrophy/>
                        <span className="link-text">
                            Trophies
                        </span>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/History" className='nav-link'>
                        <FaHistory/>
                        <span className="link-text">
                            History
                        </span>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/Settings" className='nav-link'>
                        <FaCog/>
                        <span className="link-text">
                            Settings
                        </span>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="#" className='nav-link'>
                        <FaMoon/>
                        <span className="link-text">
                            Change Theme
                        </span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
  }
  
  export default Navbar;