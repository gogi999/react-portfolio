import React from 'react';
import { Person, Mail } from '@material-ui/icons';
import './topbar.scss';

const Topbar = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">gogi999</a>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span>+387 63 313 713</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>g.petrovic9@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Topbar;
