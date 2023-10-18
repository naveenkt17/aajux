import React from "react";
import MyImage from "../../images/Group-239265.png";
import "../Pages/UserExperience.css";
import UnlockPower from "../../images/unlock_power.png";
import Process from "../../images/process.svg";
import Frame2 from "../../images/Frame-2.png";

export const  FrontEndDevelopment = () => {
  return (
    <>
      <section className="bg11">
        <div className="wrapper df pt48 lh28 ptb48">
          <div className="user-experience-heading  flx50">
            <div className="user-experience-heading2 fs20 fw5  pl4 mb16 ">
            Services <span>  / Front-end developmen</span> 
            </div>
            <div className="user-experience-heading3 fs56 fw8 lh60">
            Front-End Development
            </div>
            <div className="user-experience-heading4 fs22 fw5 lh60">
            We’re diving into the world of coding and creativity
            </div>
            <div className="user-experience-contant fw5 lh34 fc11 mb24">
            We craft digital experiences that captivate and inspire. With a keen eye for design and a mastery of code, we bring ideas to life on the web. Whether it’s the smooth dance of animations or the seamless transition between pages, we turn concepts into interactive realities.
            </div>
            <div className="fs26 fw5">What will you get out of this?</div>
            <div>
              <ul className="user-experience-list pt24 pl12 fw5">
                <li className="pl12">Interactive and Engaging User Interfaces</li>
                <li className="pl12">Accessibility for All Users</li>
                <li className="pl12">Visual Consistency</li>
                <li className="pl12">Seamless Back-End Integration</li>
              </ul>
            </div>
          </div>
          <div className="page-img ml48 aic">
            <img src={MyImage} alt="user-experience-Img" />
          </div>
        </div>
      </section>
      <section className=" ptb100">
        <div className="wrapper df pt48 lh28 ptb48">
          <div className="page-img ml48 aic">
            <img src={UnlockPower} alt="user-experience-Img" />
          </div>
          <div className="user-experience-heading  flx50">
            <div className="user-experience-heading2 fs20 fw5  pl4 mb16 ">
              Values that define us
            </div>
            <div className="user-experience-heading3 fs42 fw5 lh60">
            Elevate Your Brand: Unveil a Captivating <span>Identity Today!</span> 
            </div>
            <div className="user-experience-heading1  fs26 fw5 lh60 pt16">
            Design Integration
            </div>
            <div className="user-experience-contant1 fw5 lh34 fc11 mb24">
            We translate the designs into usable components into HTML, CSS, and JavaScript.
            </div>
            <div className="user-experience-heading2  fs26 fw5 lh60">
            Performance Optimization
            </div>
            <div className="user-experience-contant2 fw5 lh34 fc11 mb24">
            We ensure smooth performance and minimal page load times.
            </div>
            <div className="user-experience-heading3  fs26 fw5 lh60">
            Accessibility Implementation
            </div>
            <div className="user-experience-contant3 fw5 lh34 fc11 mb24">
            We adhere to accessibility standards, making digital products useable by all.
            </div>
            <div className="user-experience-heading4  fs26 fw5 lh60">
            Interactivity and Engaging
            </div>
            <div className="user-experience-contant4 fw5 lh34 fc11 mb24">
            We add interactivity by incorporating animations, transitions, and dynamic features enhancing user engagement and enjoyment.
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <div className="our-process wrapper tac lh28 ptb48">
            <div>
              <p className="our-process-heading fs20 fw5">Our process</p>
            </div>
            <div>
              <h2 className="our-process-contant fs42 fw5 lh48 pt24">
              Join us on the journey of crafting exceptional {" "}
                <span>digital experiences</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="wrapper df ptb64 jcsb">
          <div className="flx32" >
            <div className="our-process-heading1">
              <div className="fs26 fw5">
              Step 1: Design Integration and Preparation
              </div>
              <div>
                <ul className="user-experience-list fw5 pt24 pl12 mr16 lh24">
                  <li className="pl12">
                  Receive design mockups and assets from UI/UX designers.
                  </li>
                  <li className="pl12">
                  Analyze the design to understand layout, visual elements, and interactions.
                  </li>
                  <li className="pl12">
                  Prepare the design assets for implementation (e.g., slicing images, exporting icons).
                  </li>
                </ul>
              </div>
            </div>
            <div className="our-process-heading3 flx33 pt32">
              <div className="fs26 fw5 ">
              Step 3: Testing and Optimization
              </div>
              <div>
                <ul className="user-experience-list fw5 pt24 pl12 mr16 lh24">
                  <li className="pl12">
                  Collaborate with back-end developers to integrate front-end components with server-side functionalities.
                  </li>
                  <li className="pl12">
                  Perform final testing to ensure seamless interaction between front-end and back-end.
                  </li>
                  <li className="pl12">
                  Deploy the finished front-end to a web server or hosting platform for public access.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="our-process-img tac flx32 df">
            <img src={Process} alt="Brain-img" />
          </div>
          <div className="flx33">
            <div className="our-process-heading2 pb32">
              <div className="fs26 fw5">
              Step 2: Analysis and Synthesis
              </div>
              <div>
                <ul className="user-experience-list fw5 pt32 pl12 mr16 lh24">
                  <li className="pl12">
                  Review and synthesize the research findings to extract meaningful insights
                  </li>
                  <li className="pl12">
                  Identify user personas, user journeys, and key touchpoints within the product or service
                  </li>
                  <li className="pl12">
                  Create empathy maps and user personas to provide a clear understanding of user motivations
                  </li>
                </ul>
              </div>
            </div>
            <div className="our-process-heading4 pt32">
              <div className="fs26 fw5 ">
              Step 4: Integration and Deployment
              </div>
              <div>
                <ul className="user-experience-list fw5 pt24 pl12 mr16 lh24">
                  <li className="pl12">
                  Collaborate with back-end developers to integrate front-end components with server-side functionalities.
                  </li>
                  <li className="pl12">
                  Perform final testing to ensure seamless interaction between front-end and back-end.
                  </li>
                  <li className="pl12">
                  Deploy the finished front-end to a web server or hosting platform for public access.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg11">
        <div className="wrapper our-process pt100 df">
          <div className=" flx50">
            <div className="our-process-heading fs20 fw5 mb24 ml32 ">
              Our process
            </div>
            <div className="our-process-contant fs42 fw5 ml32">
              <p>
                Who <span>does this?</span>
              </p>
            </div>
          </div>
          <div className="flx1 tac df jcse ">
            <div className="right-side fw6 fs20 ">
              <img className="pb16" src={Frame2} alt="front-end-img" />
              <p>Front-End Development Team</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
