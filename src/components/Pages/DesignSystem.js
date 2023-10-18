import React from "react";
import MyImage from "../../images/Design-System.png";
import "../Pages/UserExperience.css";
import UnlockPower from "../../images/unlock_power.png";
import Process from "../../images/process.svg";
import Group from "../../images/Group.svg";
import Frame from "../../images/Frame.svg";

export const  DesignSystem = () => {
  return (
    <>
      <section className="bg11">
        <div className="wrapper df pt48 lh28 ptb48">
          <div className="user-experience-heading  flx50">
            <div className="user-experience-heading2 fs20 fw5  pl4 mb16 ">
            Services <span>  / Design system</span> 
            </div>
            <div className="user-experience-heading3 fs56 fw8 lh60">
            Design System
            </div>
            <div className="user-experience-heading4  fw5 lh60">
            Streamline Your Design Process with Consistency and Efficiency
            </div>
            <div className="user-experience-contant fw5 lh34 fc11 mb24">
            A well-crafted design system serves as the foundation for creating cohesive and visually appealing digital experiences. It empowers your team to maintain consistency across projects, enhances collaboration, and accelerates the design and development process.
            </div>
            <div className="fs26 fw5">What will you get out of this?</div>
            <div>
              <ul className="user-experience-list pt24 pl12 fw5">
                <li className="pl12">Consistent Branding</li>
                <li className="pl12">Efficient Workflows</li>
                <li className="pl12">Improved Collaboration</li>
                <li className="pl12">Scalability </li>
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
            Unlock Consistency and Elevate Your Design: Embrace <span>Our Design System Today!</span> 
            </div>
            <div className="user-experience-heading1  fs26 fw5 lh60 pt16">
            Design Elements Consistency
            </div>
            <div className="user-experience-contant1 fw5 lh34 fc11 mb24">
            Achieve a harmonious look and feel across your projects with standardized design elements. Our design system ensures that your brand’s visual identity remains consistent, enhancing recognition and user trust.
            </div>
            <div className="user-experience-heading2  fs26 fw5 lh60">
            Reusable Components and Patterns
            </div>
            <div className="user-experience-contant2 fw5 lh34 fc11 mb24">
            Unleash the potential of reusable components and design patterns. Our design system provides a library of UI elements, layouts, and interactions that can be easily integrated, speeding up your design process.
            </div>
            <div className="user-experience-heading3  fs26 fw5 lh60">
            Effortless Collaboration
            </div>
            <div className="user-experience-contant3 fw5 lh34 fc11 mb24">
            Enhance collaboration among your team members. With a shared design system, designers, developers, and stakeholders can work seamlessly, aligning their efforts to create remarkable digital products.
            </div>
            <div className="user-experience-heading4  fs26 fw5 lh60">
            Future-Proof Scalability
            </div>
            <div className="user-experience-contant4 fw5 lh34 fc11 mb24">
            As your projects evolve, your design system adapts. It allows you to scale your design assets and maintain a cohesive visual identity, ensuring your brand’s consistency as you grow.
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
              Crafting a{" "}
                <span>Cohesive Design Ecosystem</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="wrapper df ptb64 jcsb">
          <div className="flx32" >
            <div className="our-process-heading1">
              <div className="fs26 fw5">
              Step 1: Discovery and Audit
              </div>
              <div>
                <ul className="user-experience-list fw5 pt24 pl12 mr16 lh24">
                  <li className="pl12">
                  Conduct an in-depth analysis of existing design elements and assets.
                  </li>
                  <li className="pl12">
                  Identify inconsistencies and areas for improvement.
                  </li>
                  <li className="pl12">
                  Collaborate with stakeholders to define design system goals.
                  </li>
                </ul>
              </div>
            </div>
            <div className="our-process-heading3 flx33 pt32">
              <div className="fs26 fw5 ">
              Step 3: Documentation and Guidelines
              </div>
              <div>
                <ul className="user-experience-list fw5 pt24 pl12 mr16 lh24">
                  <li className="pl12">
                  Document design principles, guidelines, and usage instructions.
                  </li>
                  <li className="pl12">
                  Compile comprehensive documentation for developers to implement the design system.
                  </li>
                  <li className="pl12">
                  Include examples and code snippets for easy reference.
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
              Step 2: Design
              </div>
              <div>
                <ul className="user-experience-list fw5 pt32 pl12 mr16 lh24">
                  <li className="pl12">
                  Create a comprehensive library of design components, including buttons, forms, typography, and more.
                  </li>
                  <li className="pl12">
                  Design reusable patterns and UI elements to ensure consistency. 
                  </li>
                  <li className="pl12">
                  Implement responsive design principles to cater to various devices.
                  </li>
                </ul>
              </div>
            </div>
            <div className="our-process-heading4 pt32">
              <div className="fs26 fw5 ">
              Step 4: Integration and Training
              </div>
              <div>
                <ul className="user-experience-list fw5 pt24 pl12 mr16 lh24">
                  <li className="pl12">
                  Integrate the design system into your design and development workflows.
                  </li>
                  <li className="pl12">
                  Provide training sessions for your team members to ensure effective utilization.
                  </li>
                  <li className="pl12">
                  Foster a culture of design system adoption and continuous improvement.
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
