import React from "react";
import { Link } from "react-router-dom";
import '../Pages/Projects.css'
import MyImage from "../../images/LYFE.png";
import TIG from "../../images/TIG.png";
import Meesho from "../../images/Meesha.png";
import jobrock from "../../images/Job.rocks_.png";
import Xchainge from "../../images/Xchainge.png";
import ESG from "../../images/ESG.png";
import { CustomerTestimonial } from "./CustomerTestimonial";


export const Projects = () => {
  return (
    <>
      <section className="project-banner-01 bg11">
        <div className="wrapper df pt48 lh28 ptb100 ">
          <div className="page-intro-heading  flx50">
            <div className="page-intro-heading2 fs28 fw5 pl4 mb16">
              LYFE X
            </div>
            <div className="page-intro-heading3 fs28 fw5 lh60 mb24">
              Distinctively designed NFT marketplace for{" "}
              <b>Crypto Enthusiasts.</b>
            </div>

            <div className="page-intro-contant lh34 fc11 mb24">
              <span className="fw6">From concept to creation:</span>
              <br />
              <span className="fs18 fw2">
                {" "}
                A case study in bringing ideas to life through design.
              </span>
            </div>
            <Link className="page-btn ttu fs16 fw7 p16 get-in-touch fw6 mb32">
              <span className="fc2">VIEW CASE STUDY</span>
            </Link>
          </div>
          <div className="page-img ml48">
            <img src={MyImage} alt="Page-Intro-Img" />
          </div>
        </div>
      </section>
      <section className="project-banner-02 bg12">
        <div className="wrapper df pt48 lh28 ptb100">
          <div className="project-banner-heading  flx50">
            <div className="project-banner-heading2 fs32 fw7 pl4 mb16 ">
              TIG
            </div>
            <div className="project-banner-heading3 fs28 fw5 lh48 mb24">
              Connecting approved ESG compliant{" "} 
              <b>projects with ESG focused investors.</b>
            </div>
            <div className="project-banner-contant lh34 fc11 mb24">
              <span className="fw6">Design that drives results:</span>
              <br />
              <span className="fs18 fw2">
                A case study in effective visual communication.
              </span>
            </div>
            <Link className="page-btn ttu fs16 fw7 p16 get-in-touch fw6 mb32">
              <span className="fc2">VIEW CASE STUDY</span>
            </Link>
          </div>
          <div className="page-img ml48">
            <img src={TIG} alt="Page-Intro-Img" />
          </div>
        </div>
      </section>
      <section className="project-banner-03 bg11">
        <div className="wrapper df pt48 lh28 ptb100">
          <div className="project-banner-heading  flx50">
            <div className="project-banner-heading2 fs32 fw7 pl4 mb16 ">
              mesha
            </div>
            <div className="project-banner-heading3 fs28 fw5 lh48 mb24">
            Web3 is the way forward for the internet and{" "} 
              <b>we'll build it better, together.</b>
            </div>
            <div className="project-banner-contant lh34 fc11 mb24">
              <span className="fw6">Innovative design for a changing world:</span>
              <br />
              <span className="fs18 fw2">
              A case study in pushing boundaries and breaking norms
              </span>
            </div>
            <Link className="page-btn ttu fs16 fw7 p16 get-in-touch fw6 mb32">
              <span className="fc2">VIEW CASE STUDY</span>
            </Link>
          </div>
          <div className="page-img ml48">
            <img src={Meesho} alt="Page-Intro-Img" />
          </div>
        </div>
      </section>
      <section className="project-banner-04 bg12">
        <div className="wrapper df pt48 lh28 ptb100">
          <div className="project-banner-heading  flx50">
            <div className="project-banner-heading2 fs32 fw7 pl4 pb28 ">
              job.rocks
            </div>
            <div className="project-banner-heading3 fs28 fw5 lh48 mb24">
            Making on-demand staff recruitment{" "} 
              <b>easy, fast & affordable.</b>
            </div>
            <div className="project-banner-contant lh34 fc11 mb24">
              <span className="fw6">Design that drives results:</span>
              <br />
              <span className="fs18 fw2">
              A case study in creating memorable and engaging brand experiences.
              </span>
            </div>
            <Link className="page-btn ttu fs16 fw7 p16 get-in-touch fw6 mb32">
              <span className="fc2">VIEW CASE STUDY</span>
            </Link>
          </div>
          <div className="page-img ml48">
            <img src={jobrock} alt="Page-Intro-Img" />
          </div>
        </div>
      </section>
      <section className="project-banner-05 bg11">
        <div className="wrapper df pt48 lh28 ptb100">
          <div className="project-banner-heading  flx50">
            <div className="project-banner-heading2 fs32 fw7 pl4 mb16 ">
              TIG
            </div>
            <div className="project-banner-heading3 fs28 fw5 lh48 mb24">
            Take back control of your{" "} 
              <b>Environmental, Social and Governance journey.</b>
            </div>
            <div className="project-banner-contant lh34 fc11 mb24">
              <span className="fw6">Designing for impact:</span>
              <br />
              <span className="fs18 fw2">
              A case study in using design to make a positive difference in the world.
              </span>
            </div>
            <Link className="page-btn ttu fs16 fw7 p16 get-in-touch fw6 mb32">
              <span className="fc2">VIEW CASE STUDY</span>
            </Link>
          </div>
          <div className="page-img ml48">
            <img src={ESG} alt="Page-Intro-Img" />
          </div>
        </div>
      </section>
      <section className="project-banner-06 bg12">
        <div className="wrapper df pt48 lh28 ptb100">
          <div className="project-banner-heading  flx50">
            <div className="project-banner-heading2 fs32 fw7 pl4 mb16 ">
              TIG
            </div>
            <div className="project-banner-heading3 fs28 fw5 lh48 mb24">
            Helping businesses improve financial{" "} 
              <b>health & sustainability</b>
            </div>
            <div className="project-banner-contant lh34 fc11 mb24">
              <span className="fw6">Empowering through design:</span>
              <br />
              <span className="fs18 fw2">
              A case study in creating inclusive and accessible visual solutions.
              </span>
            </div>
            <Link className="page-btn ttu fs16 fw7 p16 get-in-touch fw6 mb32">
              <span className="fc2">VIEW CASE STUDY</span>
            </Link>
          </div>
          <div className="page-img ml48">
            <img src={Xchainge} alt="Page-Intro-Img" />
          </div>
        </div>
      </section>
      <CustomerTestimonial className={" pb64"}/>
    </>
  );
};
