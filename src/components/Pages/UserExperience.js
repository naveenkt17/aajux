import React from "react";
import MyImage from "../../images/single_service_vector.svg";
import "../Pages/UserExperience.css";
import UnlockPower from "../../images/unlock_power.png";
import Process from "../../images/process.svg";
import Group from "../../images/Group.svg";
import Frame from "../../images/Frame.svg"

export const UserExperience = () => {
  return (
    <>
      <section className="bg11">
        <div className="wrapper df pt48 lh28 ptb48">
          <div className="user-experience-heading  flx50">
            <div className="user-experience-heading2 fs20 fw5  pl4 mb16 ">
              Services <span>/ UX research</span>
            </div>
            <div className="user-experience-heading3 fs56 fw8 lh60">
              UX Research
            </div>
            <div className="user-experience-heading4  fw5 lh60">
              Uncover Insights to Shape Exceptional Experiences
            </div>
            <div className="user-experience-contant fw5 lh34 fc11 mb24">
              Dive into the realm of user behaviors and preferences to create
              intuitive and impactful designs that resonate. Our user experience
              research lays the foundation for design decisions that matter.
            </div>
            <div className="fs26 fw5">What will you get out of this?</div>
            <div>
              <ul className="user-experience-list pt24 pl12">
                <li className="pl12">Deeper Understanding</li>
                <li className="pl12">Informed Design</li>
                <li className="pl12">Improved Usability</li>
                <li className="pl12">Effective Decision-Making</li>
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
              Unlock the <span>Power of UX</span> Research
            </div>
            <div className="user-experience-heading1 fc12 fs26 fw5 lh60 pt16">
              User Behavior Analysis
            </div>
            <div className="user-experience-contant1 fw5 lh34 fc11 mb24">
              Understand how users engage with your product through detailed
              behavioral analysis, guiding design refinements.
            </div>
            <div className="user-experience-heading2 fc12 fs26 fw5 lh60">
              User Needs Assessment
            </div>
            <div className="user-experience-contant2 fw5 lh34 fc11 mb24">
              Identify user needs and expectations to{" "}
              <span className="fc12 fw6">design experiences</span> that
              seamlessly align with their goals.
            </div>
            <div className="user-experience-heading3 fc12 fs26 fw5 lh60">
              Comprehensive Insights
            </div>
            <div className="user-experience-contant3 fw5 lh34 fc11 mb24">
              Unlock comprehensive insights that empower you to make design
              decisions that captivate your audience.
            </div>
            <div className="user-experience-heading4 fc12 fs26 fw5 lh60">
              Data-Driven Iterations
            </div>
            <div className="user-experience-contant4 fw5 lh34 fc11 mb24">
              Iterate and improve based on valuable insights, ensuring your
              designs evolve with user preferences.
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
              <div className="fs26 fw5 fc12">
                Step 1: Research and Discovery
              </div>
              <div>
                <ul className="user-experience-list fw5 pt24 pl12 mr16 lh24">
                  <li className="pl12">
                    Conduct thorough user research to gain deep insights into
                    user behaviors, preferences, and pain points
                  </li>
                  <li className="pl12">
                    Utilize techniques such as surveys, interviews, and
                    observations to gather valuable data
                  </li>
                  <li className="pl12">
                    Analyze collected data to identify patterns, user needs, and
                    opportunities for improvement
                  </li>
                </ul>
              </div>
            </div>
            <div className="our-process-img tac flx32">
              <img src={Process} alt="Brain-img" />
            </div>
            <div className="flx32">
              <div className="fs26 fw5 fc12">
                Step 2: Analysis and Synthesis
              </div>
              <div>
                <ul className="user-experience-list fw5 pt32 pl12 mr16 lh24">
                  <li className="pl12">
                    Review and synthesize the research findings to extract
                    meaningful insights
                  </li>
                  <li className="pl12">
                    Identify user personas, user journeys, and key touchpoints
                    within the product or service
                  </li>
                  <li className="pl12">
                    Create empathy maps and user personas to provide a clear
                    understanding of user motivations
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
            Step 3: Ideation and Conceptualization
          </div>
          <div>
            <ul className="user-experience-list3 pt24 fw5 pl12 mlr370 lh24 ">
              <li className="pl12">
                Brainstorm creative solutions based on the synthesized insights.
              </li>
              <li className="pl12">
                Generate wireframes, storyboards, and prototypes to visualize
                potential design directions.
              </li>
              <li className="pl12">
                Collaborate with cross-functional teams to refine ideas and
                align on the best concepts.
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
