import React from "react";
import MyImage from "../../images/Usability-Testing.png";
import "../Pages/UserExperience.css";
import UnlockPower from "../../images/unlock_power.png";
import Process from "../../images/process.svg";
import Group from "../../images/Group.svg";
import Frame from "../../images/Frame.svg";

export const UsabilityTesting = () => {
  return (
    <>
      <section className="bg11">
        <div className="wrapper df pt48 lh28 ptb48">
          <div className="user-experience-heading  flx50">
            <div className="user-experience-heading2 fs20 fw5  pl4 mb16 ">
            Services / Usability testing 
            </div>
            <div className="user-experience-heading3 fs56 fw8 lh60">
            Usability Testing
            </div>
            <div className="user-experience-heading4  fw5 lh60">
            Enhancing User Experience Through Validation
            </div>
            <div className="user-experience-contant fw5 lh34 fc11 mb24">
            Usability testing plays a crucial role in ensuring your product’s effectiveness and user satisfaction. By evaluating real user interactions, identifying pain points, and refining design elements, you can create a seamless and enjoyable experience for your audience.
            </div>
            <div className="fs26 fw5">What will you get out of this?</div>
            <div>
              <ul className="user-experience-list pt24 pl12 fw5">
                <li className="pl12">Insights into User Behavior</li>
                <li className="pl12">Identification of Usability Issues</li>
                <li className="pl12">Refined User Interface</li>
                <li className="pl12">Enhanced User Satisfaction</li>
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
            Reveal the true potential of usability testing by enhancing user experiences with precision. 
            </div>
            <div className="user-experience-heading1  fs26 fw5 lh60 pt16">
            User Interaction
            </div>
            <div className="user-experience-contant1 fw5 lh34 fc11 mb24">
            Leverage usability testing to gain valuable insights into how users interact with your product. Understand their behaviors, preferences, and pain points, and use this knowledge to create a more intuitive and engaging experience.
            </div>
            <div className="user-experience-heading2  fs26 fw5 lh60">
            Objective Evaluation
            </div>
            <div className="user-experience-contant2 fw5 lh34 fc11 mb24">
            Usability testing provides an objective assessment of your product’s performance. By observing real users in action, you can measure effectiveness, efficiency, and overall user satisfaction accurately.
            </div>
            <div className="user-experience-heading3  fs26 fw5 lh60">
            Identification of Issues
            </div>
            <div className="user-experience-contant3 fw5 lh34 fc11 mb24">
            Discover usability issues that might hinder user engagement or cause frustration. Usability testing uncovers these issues early, allowing you to address them before they impact your product’s success.
            </div>
            <div className="user-experience-heading4  fs26 fw5 lh60">
            Iterative Improvement
            </div>
            <div className="user-experience-contant4 fw5 lh34 fc11 mb24">
            Usability testing supports an iterative design approach. Continuously refine and enhance your product based on user feedback, ensuring it evolves into a seamless and user-friendly solution.
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
              A Systematic Approach to{" "}
                <span>Usability Testing</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="wrapper df ptb64 jcsb">
          <div className="flx32" >
            <div className="our-process-heading1">
              <div className="fs26 fw5">
              Step 1: Recruiting Participants
              </div>
              <div>
                <ul className="user-experience-list fw5 pt24 pl12 mr16 lh24">
                  <li className="pl12">
                  Careful selection of diverse participants representing your target audience.
                  </li>
                  <li className="pl12">
                  Ensuring comprehensive insights through varied demographics and backgrounds.
                  </li>
                  <li className="pl12">
                  Building a user panel for future testing and research purposes.
                  </li>
                </ul>
              </div>
            </div>
            <div className="our-process-heading3 flx33 pt32">
              <div className="fs26 fw5 ">
              Step 3: Running the Session
              </div>
              <div>
                <ul className="user-experience-list fw5 pt24 pl12 mr16 lh24">
                  <li className="pl12">
                  Conducting usability sessions in controlled environments.
                  </li>
                  <li className="pl12">
                  Gathering qualitative and quantitative data through user interactions.
                  </li>
                  <li className="pl12">
                  Using various usability testing methods such as moderated and unmoderated sessions.
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
              Step 2: Designing the Task
              </div>
              <div>
                <ul className="user-experience-list fw5 pt32 pl12 mr16 lh24">
                  <li className="pl12">
                  Creating specific tasks that mimic real-world scenarios.
                  </li>
                  <li className="pl12">
                  Crafting scenarios that align with user goals and product objectives.
                  </li>
                  <li className="pl12">
                  Ensuring tasks cover critical features and user interactions.
                  </li>
                </ul>
              </div>
            </div>
            <div className="our-process-heading4 ">
              <div className="fs26 fw5 ">
              Step 4: Analyzing the Insights
              </div>
              <div>
                <ul className="user-experience-list fw5 pt24 pl12 mr16 lh24">
                  <li className="pl12">
                  Thoroughly examining collected data and feedback.
                  </li>
                  <li className="pl12">
                  Identifying usability issues and pain points experienced by participants.
                  </li>
                  <li className="pl12">
                  Providing actionable recommendations for improving user experience.
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
