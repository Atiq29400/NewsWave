import React from 'react';
import { Link } from "react-router-dom";
import sunImage from './sun.png';
import moonImage from './moon.png';
import './NavBar.css';

const NavBar = (props) => {
    const toggleTheme = () => {
        props.setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    return (
        <div>
            <nav className={`navbar fixed-top navbar-expand-lg ${props.theme === 'light' ? 'navbar-light customLight' : 'navbar-dark bg-dark'}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">NewsWave</Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><Link className="nav-link" aria-current="page" to="/home">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
                        </ul>
                    </div>
                    <div>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><Link className="nav-link" to="/login">SignOut</Link></li>
                        </ul>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <img
                            src={props.theme === 'light' ? moonImage : sunImage}
                            alt="theme"
                            style={{ width: '30px', height: '30px', cursor: 'pointer' }}
                            onClick={toggleTheme}
                        />
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
