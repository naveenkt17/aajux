import React from "react";
import icon from "../../images/mesha.svg";
import MyImage from "../../images/mesha-banner.png";
import Brife from "../../images/mesha-brief.png";
import lyfeximg from "../../images/tig_bar.png";
import meshafont from "../../images/mesha-fonts.png";
import "./Lyefx.css";
import meshascreen from "../../images/mesha_screen.png";
import Final1 from "../../images/Website-Design-1 (1).png";
import Final2 from "../../images/Website-Design-2.png";
import webdesign from "../../images/Website-Design-3.png";
import subPage1 from "../../images/Website-Design-4.png";
import subpage2 from "../../images/Website-Design-5.png";
import subpage3 from "../../images/Website-Design-6-1.png";

export const Mesha = () => {
  return (
    <>
      <section className="project-banner-01 bg11">
        <div className="wrapper df pt48 lh72 ptb100  ">
          <div className="page-intro-heading  flx50">
            <div className="page-intro-heading2 fs48  fw3 pl4 mb16">
              <img src={icon} alt="Mesha_icon_image" />
            </div>
            <div className="page-intro-heading3 fs48 fw3  mb24">
              Modern Accounting Software for Global{" "}
              <p className="fw7">Businesses and Accountants</p>
            </div>

            <div className="page-intro-contant lh34 fc11 mb24">
              <span className="fw6">Dubai & India Website Design</span>
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
            <div className="fw7 fs56 lh48 mb24 tac">2</div>
            <div className=" lh48">PERSONAS</div>
          </div>
          <div className="count-1 brd-r1 pr52">
            <div className="fw7 fs56 lh48 mb24 tac">2</div>
            <div className=" lh48">TEAM MEMBERS</div>
          </div>
          <div className="count-1 brd-r1 pr52">
            <div className="fw7 fs56 lh48 mb24 tac">20+</div>
            <div className=" lh48">SCREENS</div>
          </div>
          <div className="count-1 pr52">
            <div className="fw7 fs56 lh48 mb24 tac">1</div>
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
            <div className="brife-contant lh34  fw3  mb24">
              LMesha serves as a comprehensive financial platform catering to
              various companies, ranging from global startups to web3 teams. It
              empowers businesses to streamline all their financial operations
              seamlessly in one centralized location. Easily connect your bank
              accounts and initiate payments from anywhere in the world.
              Simplify and optimize crypto payments across multiple blockchains.{" "}
            </div>
            <div className="challenge-heading fs36  fw6 mb16">Challenges</div>
            <div className="challenge-contant lh34  fw3  mb24">
              Our primary hurdle revolved around NFTs, which being a novel
              concept, required simplification for easy user engagement and
              comprehension in this emerging market.{" "}
            </div>
          </div>
        </div>
      </section>
      <section className="lyfex-project-timeline wrapper">
        <div>
          <div className="lyfex-section p8">
            <div className="lyfex-project-heading fs42 pb32">
              Mesha <b>Project Timeline</b>
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
            <div className="crafting-right tal fs18 pl48 lh34 ">
              The choice of fonts aimed at aligning with the brand’s identity,
              which embodies a playful, inviting, and youthful spirit. Barlow
              was specifically chosen for most of the body content, while Krona
              One was selected as a complementary font for headings to add
              emphasis when needed. When combined in an organized manner, both
              fonts harmoniously complement each other, creating an appealing
              visual appeal. To ensure consistency and reflect the brand’s
              distinct personality, brand colors were thoughtfully incorporated
              throughout the design.
            </div>
          </div>
          <div className="crafting-images df pb48">
            <div className=" mr24">
              <img src={meshafont} alt="krona_image" />
            </div>
          </div>
          <div className="wireframes ptb48 tac bg13">
            <img src={meshascreen} alt="Mobile-wireframe1" />
          </div>
          <div className="wireframes ptb48 tac bg11 mt64">
            <img src={Final1} alt="Final1" />
            <img src={Final2} alt="Final2" />
            <img src={webdesign} alt="webdesign" />
            <img src={subPage1} alt="subPage1" />
            <img src={subpage2} alt="subPage2" />
            <img src={subpage3} alt="subPage3" />
          </div>
        </div>
      </section>
    </>
  );
};
