import React from "react";
import icon from "../../images/xchainge-logo.svg";
import MyImage from "../../images/xchainge-banner.png";
import Brife from "../../images/xchainge-brief.png";
import lyfeximg from "../../images/tig_bar.png";
import meshafont from "../../images/xchainge-fonts.png";
import "./Lyefx.css";
import Final1 from "../../images/Web-UI-1-2.png";
import Final2 from "../../images/Web-UI-2.png";

export const Xchainge = () => {
  return (
    <>
      <section className="project-banner-01 bg12">
        <div className="wrapper df pt48 lh72 ptb100  ">
          <div className="page-intro-heading  flx50">
            <div className="page-intro-heading2 fs48 fw3 pl4 mb16">
              <img src={icon} alt="Mesha_icon_image" />
            </div>
            <div className="page-intro-heading3 fs48 fw3  mb24">
            Sustainability and international trade to create a platform for SMEs to better manage their finances.{" "}
              
            </div>

            <div className="page-intro-contant lh34 fc11 mb24">
              <span className="fw6">
              Melbourne, Australia <span>•</span> Web Application
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
        <div className="df jcse ptb32 fc8 ">
          <div className="count-1 brd-r1 pr52">
            <div className="fw7 fs56 lh48 mb12 tac">2</div>
            <div className=" lh48">PERSONAS</div>
          </div>
          <div className="count-1 brd-r1 pr52">
            <div className="fw7 fs56 lh48 mb12 tac">3</div>
            <div className=" lh48">TEAM MEMBERS</div>
          </div>
          <div className="count-1 brd-r1 pr52">
            <div className="fw7 fs56 lh48 mb12 tac">70+</div>
            <div className=" lh48 tac">SCREENS</div>
          </div>
          <div className="count-1 pr52">
            <div className="fw7 fs56 lh48 mb12 tac">3</div>
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
            Experience a swift, user-friendly B2B digital payments platform designed to foster customer loyalty and encourage future transactions. This comprehensive solution offers an array of functionalities, including an online payment terminal, invoicing, customer portal, surcharging, credit card vault, and recurring payments.{" "}
              <p className="brife-contant fw5 pt16 fc2">
              The primary features of the platform include Business Insights, Lending, Foreign Exchange, and Business Health Score.
              </p>
              <p className="brife-contant fw5 pt16 ">
              After performing the UX/UI audit to pinpoint areas for improvement and enhance platform functionality, we proceeded with the platform revamp.
              </p>
            </div>
            <div className="challenge-heading fs36  fw6 mb16">Challenges</div>
            <div className="challenge-contant lh34  fw5   mb24">
            Designing an intuitive and user-friendly interface is essential for any app’s success. In the case of a Xchainge, users need to understand complex financial data and execute trades without confusion or errors.{" "}
            </div>
          </div>
        </div>
      </section>
      <section className="lyfex-project-timeline wrapper pb100">
        <div >
          <div className="lyfex-section p8">
            <div className="lyfex-project-heading fs42 pb32">
            Xchainge<b>Project Timeline</b>
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
            The font selection was conducted with meticulous consideration to align with the brand’s identity, conveying a sense of seriousness and trustworthiness. Lato was specifically chosen for most of the body content, as well as headings to add emphasis when necessary. This font displays a pleasing appearance when organized thoughtfully. Furthermore, brand colors were strategically employed to ensure consistency and reflect the brand’s distinctive personality.
            </div>
          </div>
          <div className="crafting-images df pb64">
            <div className=" mr24">
              <img src={meshafont} alt="font_image" />
            </div>
          </div>
          <div className="wireframes ptb48 tac bg12">
            <img src={Final1} alt="Mobile-wireframe1" />
            <img src={Final2} alt="Mobile-wireframe2" />
          </div>
        </div>
      </section>
    </>
  );
};
