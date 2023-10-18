import React from "react";
import { AiFillStar } from "react-icons/ai";
import '../components/ServiceCard.css'

export const ServiceCard = ({className,dn}) => {
  return (
    <>
      <div className={`banner-left-side1 flx24 brd4${className}`}>
        <div className="pl24 pr24 ">
        <div className="rating pb24 pt12">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <div className="contant pb24 fs15 fw6">
          It is a notable UI UX design agency. They Always provide excellent
          work.
        </div>
        </div>
        <div className="auther-name fs20 ptb12 plr32 fw5 bg11 box-center fs18 lh22 brd4">
          <p>James Sayer  - Intelico UK</p>
        </div>
      </div>
      
      
    </>
  );
};
