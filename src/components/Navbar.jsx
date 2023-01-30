import React from 'react';
import { FaFilm,FaTrophy,FaHistory,FaCog, FaMoon, FaSearch } from 'react-icons/fa';


const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul className='navbar-nav'>
                <li className='logo'>
                    <a href="#" className='nav-link'>
                        <FaFilm/>
                        <span className="link-text">
                            Movies
                        </span>
                    </a>
                </li>
                <li className='nav-item'>
                    <a href="#" className='nav-link'>
                        <FaSearch/>
                        <span className="link-text">
                            Search
                        </span>
                    </a>
                </li>
                <li className='nav-item'>
                    <a href="#" className='nav-link'>
                        <FaTrophy/>
                        <span className="link-text">
                            Trophies
                        </span>
                    </a>
                </li>
                <li className='nav-item'>
                    <a href="#" className='nav-link'>
                        <FaHistory/>
                        <span className="link-text">
                            History
                        </span>
                    </a>
                </li>
                <li className='nav-item'>
                    <a href="#" className='nav-link'>
                        <FaCog/>
                        <span className="link-text">
                            Setting
                        </span>
                    </a>
                </li>
                <li className='nav-item'>
                    <a href="#" className='nav-link'>
                        <FaMoon/>
                        <span className="link-text">
                            Change Theme
                        </span>
                    </a>
                </li>
            </ul>
        </nav>
    )
  }
  
  export default Navbar;