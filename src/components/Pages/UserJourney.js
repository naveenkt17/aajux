import React from "react";
import MyImage from "../../images/User-Journey-Evaluation.png";
import "../Pages/UserExperience.css";
import UnlockPower from "../../images/unlock_power.png";
import Process from "../../images/process.svg";
import Group from "../../images/Group.svg";
import Frame from "../../images/Frame.svg"

export const Userjourney = () => {
  return (
    <>
      <section className="bg11">
        <div className="wrapper df pt48 lh28 ptb48">
          <div className="user-experience-heading  flx50">
            <div className="user-experience-heading2 fs20 fw5  pl4 mb16 ">
              Services <span>/ User journey evaluation</span>
            </div>
            <div className="user-experience-heading3 fs56 fw8 lh60">
            User Journey Evaluation
            </div>
            <div className="user-experience-heading4  fw5 lh60">
            Enhancing User Experiences through In-Depth Journey Analysis
            </div>
            <div className="user-experience-contant fw5 lh34 fc11 mb24">
            Discover how analyzing user journeys can uncover insights that drive meaningful improvements in your product or service. Dive into the world of user interactions, pain points, and opportunities for optimization.
            </div>
            <div className="fs26 fw5">What will you get out of this?</div>
            <div>
              <ul className="user-experience-list pt24 pl12">
                <li className="pl12">Understand Behaviors</li>
                <li className="pl12">Pinpoint Pain Points</li>
                <li className="pl12">Enhance Engagement</li>
                <li className="pl12">Refine Features</li>
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
            Navigate the Path to<span>Seamless Experiences.</span>
            </div>
            <div className="user-experience-heading1 fc12 fs26 fw5 lh60 pt16">
            Journey Mapping
            </div>
            <div className="user-experience-contant1 fw5 lh34 fc11 mb24">
            Unveil the intricate paths users take through your product, allowing you to fine-tune interactions and amplify engagement. Our comprehensive journey mapping empowers you to address pain points and optimize user flows.
            </div>
            <div className="user-experience-heading2 fc12 fs26 fw5 lh60">
            Enhance User Experience
            </div>
            <div className="user-experience-contant2 fw5 lh34 fc11 mb24">
            Delve into the user journey to extract meaningful insights, enabling you to enhance every touchpoint and create a more delightful experience. Elevate user satisfaction by identifying opportunities for refinement and innovation.
            </div>
            <div className="user-experience-heading3 fc12 fs26 fw5 lh60">
            Ensure Multichannel Consistency
            </div>
            <div className="user-experience-contant3 fw5 lh34 fc11 mb24">
            Craft a harmonious brand experience by aligning user journeys across various channels. Ensure that your users encounter consistent and cohesive interactions that reinforce your brand identity and values.
            </div>
            <div className="user-experience-heading4 fc12 fs26 fw5 lh60">
            Behavior Analysis
            </div>
            <div className="user-experience-contant4 fw5 lh34 fc11 mb24">
            Uncover valuable patterns in user behavior and interactions. Our in-depth analysis empowers you to make informed decisions, optimize features, and tailor your product to better suit user needs and preferences.
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
              Gain Deeper Insights into<span>Seamless User Journeys</span>
              </h2>
            </div>
          </div>
        </div>
        <div>
          <div className="wrapper df ptb48 jcsb">
            <div className="flx32">
              <div className="fs26 fw5 fc12">
              Step 1: Mapping the Journey
              </div>
              <div>
                <ul className="user-experience-list fw5 pt24 pl12 mr16 lh24">
                  <li className="pl12">
                  Conduct in-depth user journey mapping.
                  </li>
                  <li className="pl12">
                  Identify crucial touchpoints and interactions.
                  </li>
                  <li className="pl12">
                  Visualize the flow of user experiences.
                  </li>
                </ul>
              </div>
            </div>
            <div className="our-process-img tac flx32">
              <img src={Process} alt="Brain-img" />
            </div>
            <div className="flx32">
              <div className="fs26 fw5 fc12">
              Step 2: Identifying Pain Points
              </div>
              <div>
                <ul className="user-experience-list fw5 pt32 pl12 mr16 lh24">
                  <li className="pl12">
                  Analyze user behavior and gather valuable feedback.
                  </li>
                  <li className="pl12">
                  Pinpoint pain points and areas of friction.
                  </li>
                  <li className="pl12">
                  Discover opportunities for enhancing the user experience.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="wrapper ptb100 ">
          <div className="fs26 fw5 fc12 tac">
          Step 3: Iterating and Enhancing
          </div>
          <div>
            <ul className="user-experience-list3 pt24 fw5 pl12 mlr370 lh24 ">
              <li className="pl12">
              Formulate strategies to address identified issues.
              </li>
              <li className="pl12">
              Formulate strategies to address identified issues.
              </li>
              <li className="pl12">
              Iterate designs based on user testing and feedback.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg11">
        <div className="wrapper our-process pt100 df">
          <div className=" flx50">
            <div className="our-process-heading fs20 fw5 mb24 ml32 ">Our process</div>
            <div className="our-process-contant fs42 fw5 ml32">
              <p>
                Who <span>does this?</span>
              </p>
            </div>
          </div>
          <div className="flx1 tac df jcse ">
            <div  className="right-side fw6 fs20 ">
              <img className="pb16" src={Group} alt="Group-img"/>
              <p>UI/UX Designer</p>
            </div>
            <div className="right-side fw6 fs20 ">
              <img className="pb16" src={Frame} alt="Frame-img"/>
              <p>UX Researchers</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
