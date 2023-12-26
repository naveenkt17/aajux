import React from "react";
import icon from "../../images/jobrocks-1.svg";
import MyImage from "../../images/jobrocks-banner.png";
import Brife from "../../images/jobrocks-brief.png";
import lyfeximg from "../../images/tig_bar.png";
import meshafont from "../../images/jobrocks-fonts.png";
import "./Lyefx.css";
import WebUI from "../../images/Web-UI-1.png";
import WebUI1 from "../../images/Web-UI-1-1.png";

export const Jobrocks = () => {
  return (
    <>
      <section className="project-banner-01 bg11">
        <div className="wrapper df pt48 lh72 ptb100  ">
          <div className="page-intro-heading  flx50">
            <div className="page-intro-heading2 fs48  fw3 pl4 mb16">
              <img src={icon} alt="Mesha_icon_image" />
            </div>
            <div className="page-intro-heading3 fs48 fw3  mb24">
              Manage shifts & <p className="fw7">Preferred staff</p>
            </div>

            <div className="page-intro-contant lh34 fc11 mb24">
              <span className="fw6">
                Atlanta, USA <span>•</span> UI/UX Design
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
        <div className="df jcse ptb32 ">
          <div className="count-1 brd-r1 pr52">
            <div className="fw7 fs56 lh48 mb16 fc8 tac">2</div>
            <div className=" lh48">PERSONAS</div>
          </div>
          <div className="count-1 brd-r1 pr52">
            <div className="fw7 fs56 lh48 mb16 fc8 tac">2</div>
            <div className=" lh48">TEAM MEMBERS</div>
          </div>
          <div className="count-1 brd-r1 pr52">
            <div className="fw7 fs56 lh48 mb16 fc8 tac">30</div>
            <div className=" lh48">SCREENS</div>
          </div>
          <div className="count-1 pr52">
            <div className="fw7 fs56 lh48 mb16 fc8 tac">2</div>
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
            <div className="brife-contant lh34  fw5  mb24">
              With job.rocks, resource planning becomes a breeze, allowing you
              to focus on essential project elements. Say goodbye to tedious
              tasks like creating intricate Excel sheets for staff planning,
              constant communication with potential recruits through emails and
              messages, and making repetitive phone calls. This user-friendly
              app streamlines the entire project management process, saving
              youeffort for a smoother workflow.{" "}
            </div>
            <div className="challenge-heading fs36  fw6 mb16">Challenges</div>
            <div className="challenge-contant lh34  fw5  mb24">
              The most significant challenge was crafting a seamless shift
              planning flow that is user-friendly and easy to navigate. Ensuring
              scalability was crucial, as we aimed to maintain the same
              effortless flow even when handling large volumes of data.{" "}
            </div>
          </div>
        </div>
      </section>
      <section className="lyfex-project-timeline wrapper pb100">
        <div>
          <div className="lyfex-section p8">
            <div className="lyfex-project-heading fs42 pb32">
              Job Rocks <b>Project Timeline</b>
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
                Typeface 
                <b>
                  &{" "}<br /> Colors
                </b>
              </div>
            </div>
            <div className="crafting-right tal fs18 pl48 lh34 ">
            Fonts were selected carefully to match the brand identity i.e. Serious and trustworthy. Nunito was selected to be used for most of the body content and also for headings or to make content pop where required. This fonts appear really nice when put in an organized manner and Brand colors were used to maintain the consistency and to reflect the unique personality of the brand.
            </div>
          </div>
          <div className="crafting-images df pb48">
            <div className=" mr24">
              <img src={meshafont} alt="jobrockes_font_image" />
            </div>
          </div>
          <div className="wireframes ptb48 tac bg13">
            <img src={WebUI} alt="Mobile-wireframe1" />
            <img src={WebUI1} alt="Mobile-wireframe1" />
          </div>
        </div>
      </section>
    </>
  );
};
