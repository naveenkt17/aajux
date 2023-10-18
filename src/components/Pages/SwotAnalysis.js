import React from "react";
import MyImage from "../../images/SWOT-Analysis.png";
import "../Pages/UserExperience.css";
import UnlockPower from "../../images/unlock_power.png";
import Process from "../../images/process.svg";
import Group from "../../images/Group.svg";
import Frame from "../../images/Frame.svg";

export const SwotAnalysis = () => {
  return (
    <>
      <section className="bg11">
        <div className="wrapper df pt48 lh28 ptb48">
          <div className="user-experience-heading  flx50">
            <div className="user-experience-heading2 fs20 fw5  pl4 mb16 ">
              Services / SWOT analysis
            </div>
            <div className="user-experience-heading3 fs56 fw8 lh60">
            SWOT Analysis
            </div>
            <div className="user-experience-heading4  fw5 lh60">
            Uncover Strategic Insights for Informed Decision-making
            </div>
            <div className="user-experience-contant fw5 lh34 fc11 mb24">
            Gain a comprehensive understanding of your project’s strengths, weaknesses, opportunities, and threats through a strategic SWOT analysis. This powerful tool enables you to make informed decisions and develop effective strategies.
            </div>
            <div className="fs26 fw5">What will you get out of this?</div>
            <div>
              <ul className="user-experience-list pt24 pl12 fw5">
                <li className="pl12">Clear Identification</li>
                <li className="pl12">Strategic Planning</li>
                <li className="pl12">Informed Decision-making</li>
                <li className="pl12">Actionable Insights</li>
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
            Empower Your Project with{" "}
              <span>SWOT Insights.</span>
            </div>
            <div className="user-experience-heading1  fs26 fw5 lh60 pt16">
            Foundation for Planning
            </div>
            <div className="user-experience-contant1 fw5 lh34 fc11 mb24">
            Gain a solid foundation for strategic planning by understanding your project’s internal strengths, weaknesses, external opportunities, and threats.
            </div>
            <div className="user-experience-heading2  fs26 fw5 lh60">
            Decision-Making Guidance
            </div>
            <div className="user-experience-contant2 fw5 lh34 fc11 mb24">
            Identify user needs and expectations to design experiences that seamlessly align with their goals.
            </div>
            <div className="user-experience-heading3  fs26 fw5 lh60">
            Risk Mitigation and Preparation
            </div>
            <div className="user-experience-contant3 fw5 lh34 fc11 mb24">
            Identify potential risks and proactively prepare for challenges using SWOT insights, ensuring a resilient project approach.
            </div>
            <div className="user-experience-heading4  fs26 fw5 lh60">
            Strategic Implications
            </div>
            <div className="user-experience-contant4 fw5 lh34 fc11 mb24">
            Uncover the strategic implications of your project’s SWOT analysis, shaping your actions and strategies for optimal results.
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
              Gain Insights Through{" "}
                <span>SWOT Analysis</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="wrapper df ptb64 jcsb">
          <div className="flx32" >
            <div className="our-process-heading1">
              <div className="fs26 fw5">
              Step 1: Identify Strengths
              </div>
              <div>
                <ul className="user-experience-list fw5 pt24 pl12 mr16 lh24">
                  <li className="pl12">
                  Recognize the unique capabilities and advantages your project possesses.
                  </li>
                  <li className="pl12">
                  Evaluate internal factors that contribute positively to your project’s objectives.
                  </li>
                  <li className="pl12">
                  Highlight areas where your project excels and stands out in the market.
                  </li>
                </ul>
              </div>
            </div>
            <div className="our-process-heading3 flx33 pt32">
              <div className="fs26 fw5 ">
              Step 3: Explore Opportunities
              </div>
              <div>
                <ul className="user-experience-list fw5 pt24 pl12 mr16 lh24">
                  <li className="pl12">
                  Identify external possibilities and favorable circumstances that can benefit your project.
                  </li>
                  <li className="pl12">
                  Analyze market trends, customer needs, or emerging technologies that could be advantageous.
                  </li>
                  <li className="pl12">
                  Uncover potential areas for growth, expansion, or innovation within your project.
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
              Step 2: Uncover Weaknesses
              </div>
              <div>
                <ul className="user-experience-list fw5 pt32 pl12 mr16 lh24">
                  <li className="pl12">
                  Identify limitations, shortcomings, or areas needing improvement within your project.
                  </li>
                  <li className="pl12">
                  Evaluate internal aspects that might hinder the achievement of your goals.
                  </li>
                  <li className="pl12">
                  Gain a comprehensive understanding of aspects that need strengthening or addressing.
                  </li>
                </ul>
              </div>
            </div>
            <div className="our-process-heading4">
              <div className="fs26 fw5 ">
              Step 4: Analyze Threats
              </div>
              <div>
                <ul className="user-experience-list fw5 pt24 pl12 mr16 lh24">
                  <li className="pl12">
                  Identify external factors or challenges that could negatively impact your project.
                  </li>
                  <li className="pl12">
                  Evaluate potential obstacles, competition, or changing market conditions.
                  </li>
                  <li className="pl12">
                  Develop strategies to minimize risks and address potential threats proactively.
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
