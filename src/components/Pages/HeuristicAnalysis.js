import React from "react";
import MyImage from "../../images/Heuristic-Analysis-2.png";
import "../Pages/UserExperience.css";
import UnlockPower from "../../images/unlock_power.png";
import Process from "../../images/process.svg";
import Group from "../../images/Group.svg";
import Frame from "../../images/Frame.svg";

export const Heuristic = () => {
  return (
    <>
      <section className="bg11">
        <div className="wrapper df pt48 lh28 ptb48">
          <div className="user-experience-heading  flx50">
            <div className="user-experience-heading2 fs20 fw5  pl4 mb16 ">
              Services / Heuristic analysis
            </div>
            <div className="user-experience-heading3 fs56 fw8 lh60">
              Heuristic Analysis
            </div>
            <div className="user-experience-heading4  fw5 lh60">
              Revealing Design Insights Through Heuristic Evaluation
            </div>
            <div className="user-experience-contant fw5 lh34 fc11 mb24">
              Uncover usability issues and enhance your product’s design by
              subjecting it to a comprehensive heuristic analysis
            </div>
            <div className="fs26 fw5">What will you get out of this?</div>
            <div>
              <ul className="user-experience-list pt24 pl12 fw5">
                <li className="pl12">Actionable Recommendations</li>
                <li className="pl12">Enhanced Usability</li>
                <li className="pl12">Optimized User Flows</li>
                <li className="pl12">Improved User Satisfaction</li>
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
              For usability testing to be valuable, study findings{" "}
              <span>must clearly identify issues</span>
            </div>
            <div className="user-experience-heading1  fs26 fw5 lh60 pt16">
              Usability Heuristics
            </div>
            <div className="user-experience-contant1 fw5 lh34 fc11 mb24">
              Improve user experience by evaluating your product against
              recognized usability heuristics to uncover design issues.
            </div>
            <div className="user-experience-heading2  fs26 fw5 lh60">
              Identifying Issues
            </div>
            <div className="user-experience-contant2 fw5 lh34 fc11 mb24">
              Pinpoint specific usability problems that hinder user interactions
              and satisfaction.
            </div>
            <div className="user-experience-heading3  fs26 fw5 lh60">
              Severity Ratings
            </div>
            <div className="user-experience-contant3 fw5 lh34 fc11 mb24">
              Assign severity levels to identified issues to prioritize and
              address the most impactful ones
            </div>
            <div className="user-experience-heading4  fs26 fw5 lh60">
              Iterative Improvement
            </div>
            <div className="user-experience-contant4 fw5 lh34 fc11 mb24">
              Continuously refine and enhance your product’s usability based on
              iterative testing and implementation.
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
                Drive Enhanced{" "}
                <span>User Experiences Through Heuristic Analysis</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="wrapper df ptb64 jcsb">
          <div className="flx32" >
            <div className="our-process-heading1">
              <div className="fs26 fw5">
              Step 1: Understand Business Requirements and User Needs
              </div>
              <div>
                <ul className="user-experience-list fw5 pt24 pl12 mr16 lh24">
                  <li className="pl12">
                  Dive deep into business requirements to grasp project objectives.
                  </li>
                  <li className="pl12">
                  Analyze user needs and expectations to align analysis with user-centric goals.
                  </li>
                  <li className="pl12">
                  Formulate a clear understanding of the context and purpose of the heuristic evaluation.
                  </li>
                </ul>
              </div>
            </div>
            <div className="our-process-heading3 flx33 pt32">
              <div className="fs26 fw5 ">
              Step 3: Evaluate User Experience and Identify Usability Issues
              </div>
              <div>
                <ul className="user-experience-list fw5 pt24 pl12 mr16 lh24">
                  <li className="pl12">
                  Evaluate the user journey through the application, identifying pain points.
                  </li>
                  <li className="pl12">
                  Systematically apply selected heuristics to assess usability aspects.
                  </li>
                  <li className="pl12">
                  Document and categorize identified usability issues for further analysis.
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
              Step 2: Select Reporting Tools and Heuristics
              </div>
              <div>
                <ul className="user-experience-list fw5 pt32 pl12 mr16 lh24">
                  <li className="pl12">
                  Choose appropriate reporting tools tailored to the project’s scope.
                  </li>
                  <li className="pl12">
                  Select relevant usability heuristics to focus the evaluation process.
                  </li>
                  <li className="pl12">
                  Customize evaluation criteria to address specific usability aspects.
                  </li>
                </ul>
              </div>
            </div>
            <div className="our-process-heading4 pt32">
              <div className="fs26 fw5 ">
              Step 4: Analyze and Aggregate Findings
              </div>
              <div>
                <ul className="user-experience-list fw5 pt24 pl12 mr16 lh24">
                  <li className="pl12">
                  Analyze collected data to extract meaningful patterns and insights.
                  </li>
                  <li className="pl12">
                  Prioritize usability issues based on severity and potential impact.
                  </li>
                  <li className="pl12">
                  Aggregate findings into a comprehensive report, guiding actionable recommendations.
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
