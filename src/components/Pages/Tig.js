import React from "react";
import MyImage from "../../images/tig_banner.png";
import tigicon from "../../images/tig-logo.svg"
import Timeline from "../../images/Group-239319.png";
import alpha from "../../images/alphabets-1.png";
import "./Lyefx.css";
import wireframe1 from "../../images/wireframe-1-1.png";
import wireframe2 from "../../images/wireframe-2-1.png";
import webdesign1 from "../../images/web-design-1-1.png";
import webdesign2 from "../../images/web-design-2-1.png";

export const Tig = () => {
  return (
    <>
      <section className="project-banner-01 bg12">
        <div className="wrapper df pt48 lh72 ptb100 ">
          <div className="page-intro-heading  flx50">
            <div className="page-intro-heading2 fs48  fw3 pl4 mb16"><img src={tigicon} alt="tig_icon_image"/></div>
            <div className="page-intro-heading3 fs48 fw4  mb24">
            Connecting ‘approved’ ESG compliant projects with responsible & ESG focused{" "}
              <p className="fw7">investors</p>
            </div>

            <div className="page-intro-contant lh34 fc11 mb24">
              <span className="fw6">Melbourne, Australia UI/UX Design</span>
              <br />
            </div>
          </div>
          <div className="page-img tar">
            <img src={MyImage} alt="Page-Intro-Img" />
          </div>
        </div>
      </section>
      <section className="lyefx-banner-cont wrapper ">
        <div className="df jcse ptb32 fc7">
          <div className="count-1 brd-r1 pr52">
            <div className="fw7 fs56 lh48 mb24 tac">4</div>
            <div className=" lh48">PERSONAS</div>
          </div>
          <div className="count-1 brd-r1 pr52">
            <div className="fw7 fs56 lh48 mb24 tac">5</div>
            <div className=" lh48">TEAM MEMBERS</div>
          </div>
          <div className="count-1 brd-r1 pr52">
            <div className="fw7 fs56 lh48 mb24 tac">150+</div>
            <div className=" lh48">SCREENS</div>
          </div>
          <div className="count-1 pr52">
            <div className="fw7 fs56 lh48 mb24 tac">6</div>
            <div className=" lh48">DURATION IN MONTHS</div>
          </div>
        </div>
      </section>
      <section className="project-banner-01">
        <div className="wrapper df pt48  ptb100 ">
          <div className="page-img ">
            <img src={MyImage} alt="tig-Img" />
          </div>
          <div className="brife-heading  flx50">
            <div className="brife-heading1 fs42  fw6 mb16">Brief</div>
            <div className="brife-contant lh34  fw3  mb24">
              LWe assisted The Impactful Group in creating a cutting-edge digital platform that connects approved investors, corporates, and assets, positioning it as a global leader in this domain. This platform effectively addresses various challenges prevalent in the investment industry and introduces several groundbreaking features never seen before. TIG’s primary focus is to curate investment opportunities for investors, ensuring they receive comprehensive risk assessments covering both financial and non-financial Environmental, Social, and Governance (ESG) factors.{" "}
              
            </div>
            <div className="challenge-heading fs36  fw6 mb16">Challenges</div>
            <div className="challenge-contant lh34  fw3  mb24">
              TAs a relatively new platform with limited competitors for research and inspiration, our main challenge revolved around handling vast amounts of data. Our primary goal was to create an aesthetically pleasing interface while ensuring that the information presented to the users remained easily understandable and user-friendly.{" "}
              
            </div>
          </div>
        </div>
      </section>
      <section className="lyfex-project-timeline wrapper">
        <div className="pb64">
          <div className="lyfex-section p8 p16">
            <div className="lyfex-project-heading fs42 pb32">
            TIG <b>Project Timeline</b>
            </div>
            <div className="lyfex-project-contant fs18 fw5 lh34 mb64">
            We employed several UX processes to arrive at an appropriate solution. Here is a brief overview of the project timeline and the approach adopted throughout its duration
            </div>
            <div className="lyfex-project-img mb64">
              <img src={Timeline} alt="Page-Intro-Img" />
            </div>
          </div>

          <div className="crafting-left df ptb100">
            <div className="crafting brd-r1 pr48 ">
              <div className="crafting-heading fs26 fc11 mb32">
              Brand colors
              </div>
              <div className="crafting-heading-2 fs36 lh60">
              Typeface{" "}
                <b>
                  &<br /> Colors
                </b>
              </div>
            </div>
            <div className="crafting-right tal fs18 pl48 lh34 ">
            The fonts were chosen with great care to align with the brand’s identity, exuding a sense of seriousness and trustworthiness. Proxima Nova was specifically selected for most of the body content and headings, as it effectively enhances the content where needed. Its organized presentation complements the overall appearance, while brand colors were utilized to maintain consistency and reflect the brand’s distinct personality.
            </div>
          </div>
          <div className="crafting-images df pb64">
            <div className=" mr24">
              <img src={alpha} alt="krona_image" />
            </div>
          </div>
          <div className="wireframes ptb48 tac bg13">
            <img src={wireframe1} alt="Mobile-wireframe1" />
            <img src={wireframe2} alt="Mobile-wireframe2" />
          </div>
          <div className="wireframes ptb48 tac bg13 mt64">
            <img src={webdesign1} alt="Final1" />
            <img src={webdesign2} alt="Final2" />
          </div>
        </div>
      </section>
    </>
  );
};
