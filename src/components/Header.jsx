import React, { useEffect, useRef } from 'react';
import { handleScroll } from '../utils/scrollHandler';
import suitmediaLogo from '../assets/suitmedia.png'; 

const Header = () => {
    const headerRef = useRef(null);

    useEffect(() => {
        handleScroll(headerRef.current);
    }, []);

    return (
        <header ref={headerRef}>
            <div className="logo">
                <img src={suitmediaLogo} alt="Suitmedia Logo" /> {/* Use the imported image */}
            </div>
            <nav>
                <ul>
                    <li><a href="/work">Work</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/ideas" className="active">Ideas</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/careers">Careers</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
