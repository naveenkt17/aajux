import React from "react";
import MyImage from "../../images/User-experience-design.png";
import "../Pages/UserExperience.css";
import UnlockPower from "../../images/unlock_power.png";
import Process from "../../images/process.svg";
import Group from "../../images/Group.svg";
import Frame from "../../images/Frame.svg";

export const  UserExperienceDesign = () => {
  return (
    <>
      <section className="bg11">
        <div className="wrapper df pt48 lh28 ptb48">
          <div className="user-experience-heading  flx50">
            <div className="user-experience-heading2 fs20 fw5  pl4 mb16 ">
            Services <span> / User experience design</span> 
            </div>
            <div className="user-experience-heading3 fs56 fw8 lh60">
            User Experience Design
            </div>
            <div className="user-experience-heading4  fw5 lh60">
            Crafting Seamless Digital Experiences
            </div>
            <div className="user-experience-contant fw5 lh34 fc11 mb24">
            Elevate your digital products with thoughtful user experience design that prioritizes usability and customer satisfaction.
            </div>
            <div className="fs26 fw5">What will you get out of this?</div>
            <div>
              <ul className="user-experience-list pt24 pl12 fw5">
                <li className="pl12">Intuitive Navigation</li>
                <li className="pl12">Enhanced Engagement</li>
                <li className="pl12">Improved Conversion</li>
                <li className="pl12">User-Centered Design </li>
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
            Everything starts with a wireframe <span>and we build</span> 
            </div>
            <div className="user-experience-heading1  fs26 fw5 lh60 pt16">
            User-Centered Research
            </div>
            <div className="user-experience-contant1 fw5 lh34 fc11 mb24">
            Begin your UX journey with thorough user-centered research. Understand your audience, their needs, and behaviors to create designs that truly resonate.
            </div>
            <div className="user-experience-heading2  fs26 fw5 lh60">
            Identification of Weaknesses
            </div>
            <div className="user-experience-contant2 fw5 lh34 fc11 mb24">
            We identify and address potential weaknesses in your current design, ensuring a seamless and user-friendly digital experience.
            </div>
            <div className="user-experience-heading3  fs26 fw5 lh60">
            User Journey Analysis
            </div>
            <div className="user-experience-contant3 fw5 lh34 fc11 mb24">
            Analyze user journeys to streamline navigation and interactions, creating a satisfying path for your users.
            </div>
            <div className="user-experience-heading4  fs26 fw5 lh60">
            Information Architecture and Wireframing
            </div>
            <div className="user-experience-contant4 fw5 lh34 fc11 mb24">
            Craft a solid foundation with clear information architecture and detailed wireframes, setting the stage for a functional and intuitive design.
            </div>
            <div className="user-experience-heading5  fs26 fw5 lh60">
            Visual Design Integration
            </div>
            <div className="user-experience-contant5 fw5 lh34 fc11 mb24">
            Our expert designers integrate engaging visual elements that complement your brand and enhance user engagement.on architecture and detailed wireframes, setting the stage for a functional and intuitive design.
            </div>
            <div className="user-experience-heading6  fs26 fw5 lh60">
            Accessibility and Inclusivity
            </div>
            <div className="user-experience-contant6 fw5 lh34 fc11 mb24">
            Prioritize accessibility and inclusivity, ensuring your design is usable and enjoyable for all users, regardless of their abilities.
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
              Crafting Seamless{" "}
                <span>Digital Experiences</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="wrapper df ptb64 jcsb">
          <div className="flx32" >
            <div className="our-process-heading1">
              <div className="fs26 fw5">
              Step 1: Research and Discovery
              </div>
              <div>
                <ul className="user-experience-list fw5 pt24 pl12 mr16 lh24">
                  <li className="pl12">
                  Comprehensive research to understand your target audience and their needs.
                  </li>
                  <li className="pl12">
                  Discovery phase to gather insights and define project goals.
                  </li>
                  <li className="pl12">
                  Analysis of market trends and competitors.
                  </li>
                </ul>
              </div>
            </div>
            <div className="our-process-heading3 flx33 pt32">
              <div className="fs26 fw5 ">
              Step 3: Usability Testing and Iteration
              </div>
              <div>
                <ul className="user-experience-list fw5 pt24 pl12 mr16 lh24">
                  <li className="pl12">
                  Rigorous usability testing with real users to identify areas of improvement.
                  </li>
                  <li className="pl12">
                  Iterative refinement based on user feedback and testing results.
                  </li>
                  <li className="pl12">
                  Ensuring the design meets usability and accessibility standards.
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
              Step 2: Design and Prototyping
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
              Step 4: Final Design and Handoff
              </div>
              <div>
                <ul className="user-experience-list fw5 pt24 pl12 mr16 lh24">
                  <li className="pl12">
                  Polishing the design to perfection, incorporating feedback and making final adjustments.
                  </li>
                  <li className="pl12">
                  Preparing assets for development and providing comprehensive design documentation.
                  </li>
                  <li className="pl12">
                  Smooth handoff to developers for implementation.
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
              <img className="pb16" src={Group} alt="Group-img" />
              <p>UI/UX Designer</p>
            </div>
            <div className="right-side fw6 fs20 ">
              <img className="pb16" src={Frame} alt="Frame-img" />
              <p>UX Researchers</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
