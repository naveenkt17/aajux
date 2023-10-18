import React from "react";
import MyImage from "../../images/Group-239260.png";
import "../Pages/UserExperience.css";
import UnlockPower from "../../images/unlock_power.png";
import Process from "../../images/process.svg";
import Motion from "../../images/Motion.png";
import Animation from "../../images/Animators.png";

export const MotionAnimation = () => {
  return (
    <>
      <section className="bg11">
        <div className="wrapper df pt48 lh28 ptb48">
          <div className="user-experience-heading  flx50">
            <div className="user-experience-heading2 fs20 fw5  pl4 mb16 ">
            Services / Motion and animation 
            </div>
            <div className="user-experience-heading3 fs56 fw8 lh60">
            Bring Your Designs to Life: Captivate with Dynamic Motion
            </div>
            <div className="user-experience-contant fw5 lh34 fc11 mb24 pt24">
            Bring life and excitement to your digital presence with the power of motion and animation. Captivate your audience’s attention and create memorable experiences that leave a lasting impression.
            </div>
            <div className="fs26 fw5">What will you get out of this?</div>
            <div>
              <ul className="user-experience-list pt24 pl12 fw5">
                <li className="pl12">Dynamic Engagement</li>
                <li className="pl12">Emotional Resonance</li>
                <li className="pl12">Enhanced Communication</li>
                <li className="pl12">Memorable Branding </li>
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
            Unlock the Power of Motion and Animation 
            </div>
            <div className="user-experience-heading1  fs26 fw5 lh60 pt16">
            Purposeful Animation
            </div>
            <div className="user-experience-contant1 fw5 lh34 fc11 mb24">
            Elevate your digital presence with purposeful animations that enhance user experience. Craft seamless and meaningful animations that guide users, highlight key elements, and add a touch of delight.
            </div>
            <div className="user-experience-heading2  fs26 fw5 lh60">
            Micro interactions
            </div>
            <div className="user-experience-contant2 fw5 lh34 fc11 mb24">
            Delight your users with micro interactions that respond to their actions, creating a sense of responsiveness and interactivity. These subtle animations enhance usability and contribute to a more engaging interface.
            </div>
            <div className="user-experience-heading3  fs26 fw5 lh60">
            Transitions and Continuity
            </div>
            <div className="user-experience-contant3 fw5 lh34 fc11 mb24">
            Create interfaces that adapt fluidly across devices, ensuring a consistent and enjoyable experience for users.
            </div>
            <div className="user-experience-heading4  fs26 fw5 lh60">
            Storytelling and Engagements
            </div>
            <div className="user-experience-contant4 fw5 lh34 fc11 mb24">
            Engage your audience through captivating storytelling with animated visuals. Convey your message effectively, evoke emotions, and leave a lasting impact on your users.
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
              From Concept to Reality: Crafting Exceptional{" "}
                <span>User Experiences</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="wrapper df ptb64 jcsb">
          <div className="flx32" >
            <div className="our-process-heading1">
              <div className="fs26 fw5">
              Step 1: Conceptualization and Planning
              </div>
              <div>
                <ul className="user-experience-list fw5 pt24 pl12 mr16 lh24">
                  <li className="pl12">
                  In-depth understanding of project goals, audience, and scope.
                  </li>
                  <li className="pl12">
                  Thorough planning to create a comprehensive roadmap.
                  </li>
                  <li className="pl12">
                  Clear identification of key milestones and deliverables.
                  </li>
                </ul>
              </div>
            </div>
            <div className="our-process-heading3 flx33 pt32">
              <div className="fs26 fw5 ">
              Step 3: Design and Development
              </div>
              <div>
                <ul className="user-experience-list fw5 pt24 pl12 mr16 lh24">
                  <li className="pl12">
                  Collaborative design process to create visually appealing interfaces.
                  </li>
                  <li className="pl12">
                  Expert development to bring designs to functional reality.
                  </li>
                  <li className="pl12">
                  Integration of cutting-edge technologies for enhanced user engagement.
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
              Step 2: Storyboarding and Prototyping
              </div>
              <div>
                <ul className="user-experience-list fw5 pt32 pl12 mr16 lh24">
                  <li className="pl12">
                  Visualize user interactions through detailed storyboards.
                  </li>
                  <li className="pl12">
                  Develop interactive prototypes to preview the user experience.
                  </li>
                  <li className="pl12">
                  Refine and iterate on prototypes based on feedback.
                  </li>
                </ul>
              </div>
            </div>
            <div className="our-process-heading4 pt32">
              <div className="fs26 fw5 ">
              Step 4: Usability Testing and Refinemen
              </div>
              <div>
                <ul className="user-experience-list fw5 pt24 pl12 mr16 lh24">
                  <li className="pl12">
                  Conduct thorough usability testing to identify user pain points.
                  </li>
                  <li className="pl12">
                  Gather feedback and insights for continuous improvement.
                  </li>
                  <li className="pl12">
                  Implement refinements to enhance user satisfaction and experience.
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
              <img className="pb16" src={Motion} alt="Group-img" />
              <p>Motion</p>
            </div>
            <div className="right-side fw6 fs20 ">
              <img className="pb16" src={Animation} alt="Frame-img" />
              <p>Animators</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
