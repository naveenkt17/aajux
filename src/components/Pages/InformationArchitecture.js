import React from "react";
import MyImage from "../../images/Group-239216.png";
import "../Pages/UserExperience.css";
import UnlockPower from "../../images/unlock_power.png";
import Process from "../../images/process.svg";
import Group from "../../images/Group.svg";
import Frame from "../../images/Frame.svg";

export const InformationArchitecture = () => {
  return (
    <>
      <section className="bg11">
        <div className="wrapper df pt48 lh28 ptb48">
          <div className="user-experience-heading  flx50">
            <div className="user-experience-heading2 fs20 fw5  pl4 mb16 ">
              Services <span>/ Information architecture analysis</span>
            </div>
            <div className="user-experience-heading3 fs56 fw8 lh60">
            Information Architecture Analysis
            </div>
            <div className="user-experience-heading4  fw5 lh60">
            Crafting Seamless User Experiences through Structured Information Design
            </div>
            <div className="user-experience-contant fw5 lh34 fc11 mb24">
            Enhance user engagement and satisfaction by strategically organizing and presenting information to users, ensuring effortless navigation and meaningful interactions.
            </div>
            <div className="fs26 fw5">What will you get out of this?</div>
            <div>
              <ul className="user-experience-list pt24 pl12 fw5">
                <li className="pl12">Optimized Information Structure</li>
                <li className="pl12">Enhanced User Flow</li>
                <li className="pl12">Reduced Bounce Rates</li>
                <li className="pl12">Increased Conversions</li>
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
            Navigating Challenges? Find {" "}
              <span>Solutions in Your Data</span>
            </div>
            <div className="user-experience-heading1  fs26 fw5 lh60 pt16">
            User-Centered Design
            </div>
            <div className="user-experience-contant1 fw5 lh34 fc11 mb24">
            Create intuitive and user-friendly navigation systems that cater to users’ mental models and expectations.
            </div>
            <div className="user-experience-heading2  fs26 fw5 lh60">
            Content Hierarchy
            </div>
            <div className="user-experience-contant2 fw5 lh34 fc11 mb24">
            Establish a clear and effective content hierarchy, guiding users to relevant information and facilitating a seamless journey.
            </div>
            <div className="user-experience-heading3  fs26 fw5 lh60">
            Efficient Task Completion
            </div>
            <div className="user-experience-contant3 fw5 lh34 fc11 mb24">
            Streamline user tasks by organizing information logically, reducing cognitive load, and minimizing user frustration.
            </div>
            <div className="user-experience-heading4  fs26 fw5 lh60">
            Scalable Architecture
            </div>
            <div className="user-experience-contant4 fw5 lh34 fc11 mb24">
            Design an adaptable information architecture that accommodates future content growth and evolving user needs.
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
              Unveiling the Method Behind Effective{" "}
                <span>Information Architecture</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="wrapper df ptb64 jcsb">
          <div className="flx32" >
            <div className="our-process-heading1">
              <div className="fs26 fw5">
              Step 1: Research and User Analysis
              </div>
              <div>
                <ul className="user-experience-list fw5 pt24 pl12 mr16 lh24">
                  <li className="pl12">
                  Understand user behavior: Gain insights into how users interact with your content, helping shape the information architecture to cater to their needs.
                  </li>
                  <li className="pl12">
                  Preferences and information needs: Identify user preferences and the type of information they seek, ensuring your architecture addresses these requirements.
                  </li>
                  <li className="pl12">
                  Foundation of your architecture: Use research findings to establish a solid foundation for your information architecture that aligns with user expectations.
                  </li>
                </ul>
              </div>
            </div>
            <div className="our-process-heading3 flx33 pt32">
              <div className="fs26 fw5 ">
              Step 3: Navigation Framework
              </div>
              <div>
                <ul className="user-experience-list fw5 pt24 pl12 mr16 lh24">
                  <li className="pl12">
                  Create intuitive navigation: Design a user-friendly navigation system that employs clear menus, labels, and categorization methods.
                  </li>
                  <li className="pl12">
                  Seamless guidance: Ensure users can effortlessly find their way around your platform, enhancing their overall experience.
                  </li>
                  <li className="pl12">
                  User-centric approach: Tailor the navigation framework to align with user expectations and behaviors, reducing confusion and frustration.
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
              Step 2: Structure Design
              </div>
              <div>
                <ul className="user-experience-list fw5 pt32 pl12 mr16 lh24">
                  <li className="pl12">
                  Develop a structured layout: Create a coherent and organized layout that presents content logically, making it easier for users to navigate.
                  </li>
                  <li className="pl12">
                  Align with user journeys: Craft the architecture to match common user journeys, ensuring that essential content areas are prominently featured.
                  </li>
                  <li className="pl12">
                  Highlight key content: Identify and emphasize crucial content elements that drive user engagement and contribute to your goals.
                  </li>
                </ul>
              </div>
            </div>
            <div className="our-process-heading4 pt64">
              <div className="fs26 fw5 ">
              Step 4: Prototype and Testing
              </div>
              <div>
                <ul className="user-experience-list fw5 pt24 pl12 mr16 lh24">
                  <li className="pl12">
                  Build interactive prototypes: Develop functional prototypes showcasing the proposed information architecture, allowing users to interact with it.
                  </li>
                  <li className="pl12">
                  Validate through user testing: Conduct rigorous testing with real users to assess the effectiveness and usability of the architecture.
                  </li>
                  <li className="pl12">
                  Iterative refinement: Incorporate user feedback to refine and optimize the architecture, enhancing its performance based on real-world usage.
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
