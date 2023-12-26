import React from "react";
import icon from "../../images/esg-logo.svg";
import MyImage from "../../images/esg-banner.png";
import Brife from "../../images/esg_brief.png";
import lyfeximg from "../../images/tig_bar.png";
import meshafont from "../../images/esg-fonts.png";
import "./Lyefx.css";
import Final1 from "../../images/wireframe-1.png";
import Final2 from "../../images/wireframe-2.png";
import webdesign from "../../images/dashboard.png";
import subPage1 from "../../images/Web-design-1.png";
import subpage2 from "../../images/Web-design-2.png";

export const Esg = () => {
  return (
    <>
      <section className="project-banner-01 bg12">
        <div className="wrapper df pt48 lh72 ptb100  ">
          <div className="page-intro-heading  flx50">
            <div className="page-intro-heading2 fs48  fw3 pl4 mb16">
              <img src={icon} alt="Mesha_icon_image" />
            </div>
            <div className="page-intro-heading3 fs48 fw3  mb24">
              Take back control of your{" "}
              <p className="fw6">
                Environmental, Social and Governance (ESG) journey.
              </p>
            </div>

            <div className="page-intro-contant lh34 fc11 mb24">
              <span className="fw6">
                Melbourne, Australia <span>•</span> UI/UX Design
              </span>
              <br />
            </div>
          </div>
          <div className="page-img tar">
            <img src={MyImage} alt="Page-Intro-Img" />
          </div>
        </div>
      </section>
      <section className="lyefx-banner-cont wrapper ">
        <div className="df jcse ptb32 fc3 ">
          <div className="count-1 brd-r1 pr52">
            <div className="fw7 fs56 lh48 mb12 tac">5</div>
            <div className=" lh48">PERSONAS</div>
          </div>
          <div className="count-1 brd-r1 pr52">
            <div className="fw7 fs56 lh48 mb12 tac">6</div>
            <div className=" lh48">TEAM MEMBERS</div>
          </div>
          <div className="count-1 brd-r1 pr52">
            <div className="fw7 fs56 lh48 mb12 tac">200+</div>
            <div className=" lh48 tac">SCREENS</div>
          </div>
          <div className="count-1 pr52">
            <div className="fw7 fs56 lh48 mb12 tac">6</div>
            <div className=" lh48">DURATION IN MONTHS</div>
          </div>
        </div>
      </section>
      <section className="project-banner-01">
        <div className="wrapper df pt48  ptb100 ">
          <div className="page-img ">
            <img src={Brife} alt="Page-Intro-Img" />
          </div>
          <div className="brife-heading  flx50">
            <div className="brife-heading1 fs42  fw6 mb16">Brief</div>
            <div className="brife-contant lh34  fw5 fc2  mb24">
              ESG Reporting Intelligence represents a state-of-the-art
              technology designed to assist businesses in initiating, enhancing,
              and reporting on their environmental, social, and governance (ESG)
              performance.{" "}
              <p className="brife-contant fw5 pt16 fc2">
                The cutting-edge program demystifies ESG reporting, catering to
                various stakeholders, including business owners, founders, CEOs,
                CFOs, sustainability, legal, procurement, or sales departments.
              </p>
              <p className="brife-contant fw5 pt16 ">
                With the solution, your business gains the ability to
                effectively manage and comprehend the diverse range of ESG
                actions that clients, customers, shareholders, and financial
                institutions increasingly anticipate in every business
                interaction.
              </p>
            </div>
            <div className="challenge-heading fs36  fw6 mb16">Challenges</div>
            <div className="challenge-contant lh34  fw5   mb24">
              Being a relatively new platform with few competitors to draw
              research and inspiration from, our main obstacle was managing
              large volumes of data. Our primary objective was to design an
              appealing interface that maintained user-friendliness and ensured
              the information presented remained easily understandable.{" "}
            </div>
          </div>
        </div>
      </section>
      <section className="lyfex-project-timeline wrapper pb100">
        <div >
          <div className="lyfex-section p8">
            <div className="lyfex-project-heading fs42 pb32">
              ESG<b>Project Timeline</b>
            </div>
            <div className="lyfex-project-contant fs18 fw5 lh34 mb64">
              Various UX processes were followed to come up with a suitable
              solution. Below is a quick glance at the project timeline and the
              approach followed during the course of project.
            </div>
            <div className="lyfex-project-img mb64">
              <img src={lyfeximg} alt="Page-Intro-Img" />
            </div>
          </div>

          <div className="crafting-left df ptb100">
            <div className="crafting brd-r1 pr48 ">
              <div className="crafting-heading fs22 fc11 mb32">
                Brand colors
              </div>
              <div className="crafting-heading-2 fs36 fw3 lh60">
                Typeface{" "}
                <b>
                  &<br /> Colors
                </b>
              </div>
            </div>
            <div className="crafting-right tal fs18 pl48 lh34">
              The fonts were chosen with great care to align with the brand’s
              identity, exuding a sense of seriousness and trustworthiness.
              Proxima Nova, Inter and Roboto were selected, as it effectively
              enhances the content where needed. Its organized presentation
              complements the overall appearance, while brand colors were
              utilized to maintain consistency and reflect the brand’s distinct
              personality.
            </div>
          </div>
          <div className="crafting-images df pb64">
            <div className=" mr24">
              <img src={meshafont} alt="font_image" />
            </div>
          </div>
          <div className="wireframes ptb48 tac bg13">
            <img src={Final1} alt="Mobile-wireframe1" />
            <img src={Final2} alt="Mobile-wireframe2" />
          </div>
          <div className="wireframes ptb48 tac bg13 mt64">
            <img className=" pb64" src={webdesign} alt="Final1" />
            <img src={subPage1} alt="Final2" />
            <img src={subpage2} alt="Final2" />
          </div>
        </div>
      </section>
    </>
  );
};
