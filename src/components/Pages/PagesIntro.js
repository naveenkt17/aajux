import React from "react";
import MyImage from "../../images/service-page.jpg";
import { Link } from "react-router-dom";
export const PagesIntro = () => {
  return (
    <>
      <section className="page-intro">
        <div className="wrapper df pt48 lh28 ptb48">
          <div className="page-intro-heading  flx50">
            <div className="page-intro-heading2 fs20 fw5 pl4 mb16 ">
              Our services
            </div>
            <div className="page-intro-heading3 fs48 fw7 lh60 mb24">
              Empowering 
              Success With Our
              Services
            </div>

            <div className="page-intro-contant fw5 lh34 fc11 mb24">
              Explore the diverse expertise and capabilities we bring to the
              table, as well as the industries we serve. Discover how our
              services can drive innovation, streamline processes, and propel
              organizations towards their goals.
            </div >
            <Link className="page-btn ttu fs16 fw7 p16 get-in-touch fw6 mb32">
              <span className="fc2">Get in touch</span>
            </Link>
          </div>
          <div className="page-img ml48" >
            <img src={MyImage} alt="Page-Intro-Img"/>
          </div>
        </div>
      </section>
      
    </>
  );
};
