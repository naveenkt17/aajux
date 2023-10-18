import React from "react";
import MyImage from "../../images/Competitive-Analysis.png";
import "../Pages/UserExperience.css";
import UnlockPower from "../../images/unlock_power.png";
import Process from "../../images/process.svg";
import Group from "../../images/Group.svg";
import { Link } from "react-router-dom";
import Frame from "../../images/Frame.svg"

export const CompetitiveAnalysis = () => {
  return (
    <>
      <section className="bg11">
        <div className="wrapper df pt48 lh28 ptb48">
          <div className="user-experience-heading  flx50">
            <div className="user-experience-heading2 fs20 fw5  pl4 mb16 ">
            Services / Competitive analysis 
            </div>
            <div className="user-experience-heading3 fs56 fw8 lh60">
            Competitive Analysis
            </div>
            <div className="user-experience-heading4  fw5 lh60">
            Stay Ahead with In-Depth Competitive Insights
            </div>
            <div className="user-experience-contant fw5 lh34 fc11 mb24">
            Harness the power of competitive insights to elevate your business strategies. Our Competitive Analysis services provide a concise yet comprehensive examination of your industry rivals. Uncover their strengths, weaknesses, and strategies, and transform these insights into opportunities for your own success.
            </div>
            <div className="fs26 fw5">What will you get out of this?</div>
            <div>
              <ul className="user-experience-list pt24 pl12 fw5">
                <li className="pl12">Strategic Advantage</li>
                <li className="pl12">Informed Decisions</li>
                <li className="pl12">Identify Opportunities</li>
                <li className="pl12">Mitigate Risks</li>
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
            Unlock Actionable <span>Insights</span>
            </div>
            <div className="user-experience-heading1  fs22 fw5 lh60 pt16">
            Illuminate Your Path
            </div>
            <div className="user-experience-contant1 fw5 lh34 fc11 mb24">
            Discover illuminating insights that guide your <Link>journey towards success.</Link> Our in-depth research provides a clear roadmap for informed decisions
            </div>
            <div className="user-experience-heading2  fs22 fw5 lh60">
            Strategic Positioning
            </div>
            <div className="user-experience-contant2 fw5 lh34 fc11 mb24">
            Strategically position your brand for maximum impact. Our analysis empowers you to stand out amidst competition and captivate your audience.
            </div>
            <div className="user-experience-heading3  fs22 fw5 lh60">
            Elevate Decision-making
            </div>
            <div className="user-experience-contant3 fw5 lh34 fc11 mb24">
            Elevate your decision-making process with data-backed knowledge. Our findings empower you to make confident choices that drive results.
            </div>
            <div className="user-experience-heading4  fs22 fw5 lh60">
            Continuous Growth
            </div>
            <div className="user-experience-contant4 fw5 lh34 fc11 mb24">
            Foster continuous growth through refined strategies. Our insights equip you with the tools to adapt, improve, and thrive in evolving markets.
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
              Navigating the <span>Competitive Landscape</span>
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
                  Thoroughly gather and curate relevant data from diverse sources.
                  </li>
                  <li className="pl12">
                  Utilize advanced research methodologies to ensure comprehensive insights.
                  </li>
                  <li className="pl12">
                  Lay the groundwork for informed decision-making with a robust data foundation.
                  </li>
                </ul>
              </div>
            </div>
            <div className="our-process-img tac flx32 df">
              <img src={Process} alt="Brain-img" />
            </div>
            <div className="flx32">
              <div className="fs26 fw5 ">
              Step 2: Analysis and Insights
              </div>
              <div>
                <ul className="user-experience-list fw5 pt32 pl12 mr16 lh24">
                  <li className="pl12">
                  Scrutinize collected data to identify key patterns, trends, and benchmarks.
                  </li>
                  <li className="pl12">
                  Extract actionable insights that reveal your competitors’ strategies and market positioning.
                  </li>
                  <li className="pl12">
                  Transform raw data into strategic knowledge for an impactful competitive advantage.
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
          Step 3: Application and Innovation
          </div>
          <div>
            <ul className="user-experience-list3 pt24 fw5 pl12 mlr370 lh24 ">
              <li className="pl12">
              Translate insights into practical strategies for <Link>product enhancement</Link> and differentiation.
              </li>
              <li className="pl12">
              Foster innovation by leveraging competitive gaps and emerging opportunities.
              </li>
              <li className="pl12">
              Implement data-driven solutions that elevate your market presence and captivate your audience.
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
