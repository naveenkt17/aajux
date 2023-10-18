import React from "react";
import MyImage from "../../images/Frame-1.png";
import "../Pages/UserExperience.css";
import UnlockPower from "../../images/unlock_power.png";
import Process from "../../images/process.svg";
import Group from "../../images/Group.svg";
import Frame from "../../images/Frame.svg"

export const PersonaDevelopment = () => {
  return (
    <>
      <section className="bg11">
        <div className="wrapper df pt48 lh28 ptb48">
          <div className="user-experience-heading  flx50">
            <div className="user-experience-heading2 fs20 fw5  pl4 mb16 ">
              Services <span>/ Persona development</span>
            </div>
            <div className="user-experience-heading3 fs56 fw8 lh60">
            Persona Development
            </div>
            <div className="user-experience-heading4  fw5 lh60">
            Understanding Users on a Deeper Level for Targeted Design
            </div>
            <div className="user-experience-contant fw5 lh34 fc11 mb24">
            Crafting personas is a vital step in creating user-centered designs that resonate with your audience. Dive into the world of persona development to uncover valuable insights that guide your design decisions.
            </div>
            <div className="fs26 fw5">What will you get out of this?</div>
            <div>
              <ul className="user-experience-list pt24 pl12 fw5">
                <li className="pl12">User Empathy</li>
                <li className="pl12">Precise Targeting</li>
                <li className="pl12">Enhanced Decision-making</li>
                <li className="pl12">Effective Communication</li>
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
            Put Empathy into Action with <span>Persona Development</span>
            </div>
            <div className="user-experience-heading1  fs22 fw5 lh60 pt16">
            Detailed User Profiles
            </div>
            <div className="user-experience-contant1 fw5 lh34 fc11 mb24">
            Unlock detailed insights into user demographics, behaviors, and preferences, creating comprehensive user profiles that fuel empathetic design.
            </div>
            <div className="user-experience-heading2  fs22 fw5 lh60">
            User Goals and Scenarios
            </div>
            <div className="user-experience-contant2 fw5 lh34 fc11 mb24">
            Understand user motivations and envision their real-life scenarios, enabling you to design solutions tailored to their specific needs.
            </div>
            <div className="user-experience-heading3  fs22 fw5 lh60">
            Informed Decision-Making
            </div>
            <div className="user-experience-contant3 fw5 lh34 fc11 mb24">
            Utilize persona-driven data to make design decisions grounded in user understanding, resulting in more effective and impactful design choices.
            </div>
            <div className="user-experience-heading4  fs22 fw5 lh60">
            Problem Prioritization
            </div>
            <div className="user-experience-contant4 fw5 lh34 fc11 mb24">
            Identify pain points and prioritize design improvements based on user personas, focusing on solving the most critical user challenges.
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
                Delve into our iterative approach that ensures your designs are
                finely tuned for <span>user satisfaction</span>
              </h2>
            </div>
          </div>
        </div>
        <div>
          <div className="wrapper df ptb48 jcsb">
            <div className="flx32">
              <div className="fs26 fw5 ">
              Step 1: Research and Data Collection
              </div>
              <div>
                <ul className="user-experience-list fw5 pt24 pl12 mr16 lh24">
                  <li className="pl12">
                  Collect and analyze diverse user data from surveys, interviews, and analytics.
                  </li>
                  <li className="pl12">
                  Identify behavioral patterns, pain points, and preferences of your target audience.
                  </li>
                  <li className="pl12">
                  Uncover valuable insights that form the basis for creating accurate personas.
                  </li>
                </ul>
              </div>
            </div>
            <div className="our-process-img tac flx32 df">
              <img src={Process} alt="Brain-img" />
            </div>
            <div className="flx32">
              <div className="fs26 fw5 ">
              Step 2: Persona Creation
              </div>
              <div>
                <ul className="user-experience-list fw5 pt32 pl12 mr16 lh24">
                  <li className="pl12">
                  Develop detailed user personas with distinct demographics, goals, and motivations.
                  </li>
                  <li className="pl12">
                  Craft narratives that encapsulate the needs, behaviors, and expectations of each persona.
                  </li>
                  <li className="pl12">
                  Visualize personas with relatable names, images, and characteristics for easy reference.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="wrapper ptb100 ">
          <div className="fs26 fw5  tac">
          Step 3: Integration and Utilization
          </div>
          <div>
            <ul className="user-experience-list3 pt24 fw5 pl12 mlr370 lh24 ">
              <li className="pl12">
              Integrate personas into your design process to guide decision-making and ideation.
              </li>
              <li className="pl12">
              Integrate personas into your design process to guide decision-making and ideation.
              </li>
              <li className="pl12">
              Continuously refer to personas to ensure your design remains user-centered and resonates effectively.
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
