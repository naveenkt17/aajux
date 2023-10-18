import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom"
import { useGlobalContext } from "../../context"

const Hero = () => {
    
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const threshold = 10;

  const divStyle = {
    transform: `translateY(${Math.max(0, scrollY/2 - threshold)}px)`,
    opacity: Math.max(0, 100- scrollY/5)/100,
    
  };

 



    const {name} = useGlobalContext(); 
  return (
    <div className="hero v-center fww">
       
    <div className="hero-wrapper transit"  style={divStyle}>
        <p className="fs14 fw5 ls1 fc4 mb16">A USER RESEARCH, UX & DIGITAL PRODUCT STUDIO</p>
        <h1 className="hero-heading">{name} 
            That Unify Your Customer Experience
        </h1>
        <NavLink href="#" className="hero-cta h48 aic dif jcsb plr24 fc4 br2 brd1 mt40 bg-h2 fc-h3 transit1">
            Pick our Brain 
            <span className="hero-cta-icon ml40 box-center">
                <span className="material-symbols-outlined">
                    arrow_right_alt
                    </span>
            </span>
        </NavLink>
    </div>
       
</div>

  )
}

export default Hero