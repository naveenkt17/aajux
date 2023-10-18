import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // Ref to the parent component's tag
  const parentRef = useRef(null);
  const handleLinkClick = () => {
    toggleMenu();
  };
  // Function to handle clicks outside the menu
  const handleClickOutside = (event) => {
    if (parentRef.current && !parentRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };
  // Attach and detach click event listener
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <nav className='navbar flx1 jce v-center' ref={parentRef}>
      <ul className='nav-items v-center'>
        <li className='nav-item plr32'>
          <NavLink to='/about' className='nav-link fc2 fc-h2 ptb12 pr aft ls1'>
            About
          </NavLink>
        </li>
        <li className='nav-item plr32'>
          <NavLink
            to='/services'
            className='nav-link fc2 fc-h2 ptb12 pr aft ls1'
          >
            Services
          </NavLink>
        </li>
        <li className='nav-item plr32'>
          <NavLink
            to='/services'
            className='nav-link fc2 fc-h2 ptb12 pr aft ls1'
          >
            Project
          </NavLink>
        </li>
        <li className='nav-item plr32'>
          <NavLink
            to='/contact'
            className='nav-link fc2 fc-h2 ptb12 pr aft ls1'
          >
            Get in Touch
          </NavLink>
        </li>
      </ul>
      <div
        onClick={toggleMenu}
        className='menu-btn w48 h48 cp box-center fdc ml32 p8'
      >
        <span className='menu-line'></span>
        <span className='menu-line'></span>
        <span className='menu-line'></span>
      </div>
      {isMenuOpen && (
        <div className='menu-data pf w100 t0 bg1 animate-up'>
          <div className='wrapper df jce aie h100vh pb48 fww'>
            <ul className='menu-items pr48'>
              <li className='menu-item plr32'>
                <NavLink
                  to='/About'
                  onClick={handleLinkClick}
                  className='nav-link fc2 fw7 fs48 mb24 fc-h2 ptb12 pr aft ls1'
                >
                  About
                </NavLink>
              </li>
              <li className='menu-item plr32'>
                <NavLink
                  to='/'
                  onClick={handleLinkClick}
                  className='nav-link fc2 fw7 fs48 mb24 fc-h2 ptb12 pr aft ls1'
                >
                  Services
                </NavLink>
              </li>
              <li className='menu-item plr32'>
                <NavLink
                  to='/'
                  onClick={handleLinkClick}
                  className='nav-link fc2 fw7 fs48 mb24 fc-h2 ptb12 pr aft ls1'
                >
                  Career
                </NavLink>
              </li>
              <li className='menu-item plr32'>
                <NavLink
                  to='/'
                  onClick={handleLinkClick}
                  className='nav-link fc2 fw7 fs48 mb24 fc-h2 ptb12 pr aft ls1'
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <ul className='menu-items menu-items-sm '>
              <li className='menu-item plr32'>
                <span
                  to='/'
                  className='db fc2 fw7 mb8 fs18 mb8 ptb12 pr aft ls1'
                >
                  INDUSTRIES
                </span>
              </li>
              <li className='menu-item plr32'>
                <NavLink
                  to='/'
                  onClick={handleLinkClick}
                  className='nav-link fc2 fs15 mb8 fc-h2 ptb12 pr aft ls1'
                >
                  Coworking Space
                </NavLink>
              </li>
              <li className='menu-item plr32'>
                <NavLink
                  to='/'
                  onClick={handleLinkClick}
                  className='nav-link fc2 fs15 mb8 fc-h2 ptb12 pr aft ls1'
                >
                  Travel
                </NavLink>
              </li>
              <li className='menu-item plr32'>
                <NavLink
                  to='/'
                  onClick={handleLinkClick}
                  className='nav-link fc2 fs15 mb8 fc-h2 ptb12 pr aft ls1'
                >
                  IT Consultings
                </NavLink>
              </li>
              <li className='menu-item plr32'>
                <NavLink
                  to='/'
                  onClick={handleLinkClick}
                  className='nav-link fc2 fs15 mb8 fc-h2 ptb12 pr aft ls1'
                ></NavLink>
              </li>
              <li className='menu-item plr32'>
                <NavLink
                  to='/'
                  onClick={handleLinkClick}
                  className='nav-link fc2 fs15 mb8 fc-h2 ptb12 pr aft ls1'
                >
                  Services
                </NavLink>
              </li>
              <li className='menu-item plr32'>
                <NavLink
                  to='/'
                  onClick={handleLinkClick}
                  className='nav-link fc2 fs15 mb8 fc-h2 ptb12 pr aft ls1'
                >
                  Career
                </NavLink>
              </li>
              <li className='menu-item plr32'>
                <NavLink
                  to='/'
                  onClick={handleLinkClick}
                  className='nav-link fc2 fs15 mb8 fc-h2 ptb12 pr aft ls1'
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <div className='copy-right pb48 mb48 flx100 df jcsb aic'>
              <p className='fc5 tar flx100'>
                &copy; 2023 AAJUX DESIGN STUDIO. ALL RIGHT RESERVED
              </p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
