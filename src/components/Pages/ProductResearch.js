import React from "react";
import MyImage from "../../images/Product-Research.png";
import "../Pages/UserExperience.css";
import UnlockPower from "../../images/unlock_power.png";
import Process from "../../images/process.svg";
import Group from "../../images/Group.svg";
import Frame from "../../images/Frame.svg";

export const ProductResearch = () => {
  return (
    <>
      <section className="bg11">
        <div className="wrapper df pt48 lh28 ptb48">
          <div className="user-experience-heading  flx50">
            <div className="user-experience-heading2 fs20 fw5  pl4 mb16 ">
            Services <span>/ Product research</span>
            </div>
            <div className="user-experience-heading3 fs56 fw8 lh60">
            Product Research
            </div>
            <div className="user-experience-heading4  fw5 lh60">
            Uncover Insights for Successful Product Development
            </div>
            <div className="user-experience-contant fw5 lh34 fc11 mb24">
            In the competitive landscape of modern business, understanding your target market and their needs is crucial for creating products that truly resonate. Dive into the world of product research to gain valuable insights that drive informed decision-making and deliver exceptional value to your audience.
            </div>
            <div className="fs26 fw5">What will you get out of this?</div>
            <div>
              <ul className="user-experience-list pt24 pl12 fw5">
                <li className="pl12">Deeper Market Understanding</li>
                <li className="pl12">Informed Product Strategy</li>
                <li className="pl12">Enhanced User Experience</li>
                <li className="pl12">User-centric alignment</li>
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
            Elevate Your Product Development{" "}
              <span>Elevate Your Product Development</span>
            </div>
            <div className="user-experience-heading1  fs26 fw5 lh60 pt16">
            User-Centric Approach
            </div>
            <div className="user-experience-contant1 fw5 lh34 fc11 mb24">
            Leverage user-centered methodologies to gather insights directly from your target audience, ensuring your product meets their expectations.
            </div>
            <div className="user-experience-heading2  fs26 fw5 lh60">
            Competitor Analysis
            </div>
            <div className="user-experience-contant2 fw5 lh34 fc11 mb24">
            Understand your competitors’ strengths and weaknesses, enabling you to position your product effectively in the market.
            </div>
            <div className="user-experience-heading3  fs26 fw5 lh60">
            Feature Prioritization
            </div>
            <div className="user-experience-contant3 fw5 lh34 fc11 mb24">
            Identify and prioritize features that will have the greatest impact on user satisfaction and market success.
            </div>
            <div className="user-experience-heading4  fs26 fw5 lh60">
            Data-Driven Insights
            </div>
            <div className="user-experience-contant4 fw5 lh34 fc11 mb24">
            Utilize data-driven insights to make informed decisions at every stage of product development.
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
              Unveiling the Path to{" "}
                <span>Actionable Insights</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="wrapper df ptb64 jcsb">
          <div className="flx32" >
            <div className="our-process-heading1 pb32">
              <div className="fs26 fw5">
              Step 1: Define Objectives
              </div>
              <div>
                <ul className="user-experience-list fw5 pt24 pl12 mr16 lh24">
                  <li className="pl12">
                  Clearly outline your research goals and objectives to establish a clear direction for your research efforts.
                  </li>
                  <li className="pl12">
                  Identify the key questions you need to answer and the insights you aim to uncover through the research.
                  </li>
                  <li className="pl12">
                  Determine the scope of your research and the specific areas of focus that will drive your product’s success.
                  </li>
                </ul>
              </div>
            </div>
            <div className="our-process-heading3  pt32">
              <div className="fs26 fw5 ">
              Step 3: Analysis and Synthesis
              </div>
              <div>
                <ul className="user-experience-list fw5 pt24 pl12 mr16 lh24">
                  <li className="pl12">
                  Thoroughly analyze the collected data to identify patterns, trends, and user behaviors that offer valuable insights.
                  </li>
                  <li className="pl12">
                  Synthesize the data to extract meaningful conclusions and actionable recommendations.
                  </li>
                  <li className="pl12">
                  Collaborate with cross-functional teams to interpret the data and extract insights that inform product decisions.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="our-process-img tac flx32 df">
            <img src={Process} alt="Brain-img" />
          </div>
          <div className="flx32">
            <div className="our-process-heading2 pb8">
              <div className="fs26 fw5">
              Step 2: Data Collection
              </div>
              <div>
                <ul className="user-experience-list fw5 pt16 pl12 mr16 lh24">
                  <li className="pl12">
                  Gather data through a variety of methods, such as user surveys, interviews, and observation, to ensure comprehensive coverage.
                  </li>
                  <li className="pl12">
                  Utilize both qualitative and quantitative data collection techniques to gain a well-rounded perspective.
                  </li>
                  <li className="pl12">
                  Collect relevant data from competitors and industry trends to understand market dynamics and user preferences.
                  </li>
                </ul>
              </div>
            </div>
            <div className="our-process-heading4 pt32">
              <div className="fs26 fw5 ">
              Step 4: Insights and Recommendations
              </div>
              <div>
                <ul className="user-experience-list fw5 pt24 pl12 mr16 lh24">
                  <li className="pl12">
                  Translate the analyzed data into actionable insights that guide product design, features, and improvements.
                  </li>
                  <li className="pl12">
                  Create clear and concise recommendations that align with user needs and market opportunities.
                  </li>
                  <li className="pl12">
                  Prioritize recommendations based on their potential impact on user experience and business goals.
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
