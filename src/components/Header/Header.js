import React from "react";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className='header transit1 bg1 brd-b1 pf w100 l0 t0 zi99'>
      <div className='wrapper v-center jcsb h80'>
        <Link to='/' className='logo box-center'>
          <img src='./images/logo-v01.png' alt='aajux company logo' />
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
