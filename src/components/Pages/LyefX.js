import React from "react";
import MyImage from "../../images/lyfex-banner.png";
import Brife from "../../images/lyfex-brief-1.png";
import lyfeximg from "../../images/tig_bar.png";
import krona from "../../images/krona-one-light-fonts.png";
import barlow from "../../images/barlow-right-fonts.png";
import "./Lyefx.css";
import fonts from "../../images/1st color lyfex-fonts.png";
import mobilewireframe1 from "../../images/Mobile-wireframe-1-2.png";
import mobilewireframe2 from "../../images/Mobile-wireframe-2-2.png";
import webwirefram from "../../images/Website-wireframe-1.png";
import Final1 from "../../images/Final-Result-1-2.png";
import Final2 from "../../images/Final-Result-2-2.png";
import webdesign from "../../images/web-design.png";
import subPage1 from "../../images/Subpage1.png";
import subpage2 from "../../images/Subpage2.png";

export const LyefX = () => {
  return (
    <>
      <section className="project-banner-01 bg11">
        <div className="wrapper df pt48 lh72 ptb100 ">
          <div className="page-intro-heading  flx50">
            <div className="page-intro-heading2 fs48  fw3 pl4 mb16">LYFE X</div>
            <div className="page-intro-heading3 fs48 fw3  mb24">
              Distinctively designed NFT marketplace for{" "}
              <p className="fw7">Crypto Enthusiasts</p>
            </div>

            <div className="page-intro-contant lh34 fc11 mb24">
              <span className="fw6">Atlanta, USA Mobile App Design</span>
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
            <div className="fw7 fs56 lh48 mb24 tac">5</div>
            <div className=" lh48">PERSONAS</div>
          </div>
          <div className="count-1 brd-r1 pr52">
            <div className="fw7 fs56 lh48 mb24 tac">6</div>
            <div className=" lh48">TEAM MEMBERS</div>
          </div>
          <div className="count-1 brd-r1 pr52">
            <div className="fw7 fs56 lh48 mb24 tac">120+</div>
            <div className=" lh48">SCREENS</div>
          </div>
          <div className="count-1 pr52">
            <div className="fw7 fs56 lh48 mb24 tac">4</div>
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
              Lyfex offers users an authentic crypto experience by providing a
              marketplace for buying and selling NFTs (non-fungible tokens).{" "}
              <p className="">
                Additionally, it serves as a platform for hosts to organize
                events, invite users, and upload pictures to sell as NFTs.
                Recognizing that NFTs are a relatively new concept, our team
                designed an intuitive, effective, and user-friendly journey to
                ensure a smooth and enjoyable experience for all users.
              </p>
            </div>
            <div className="challenge-heading fs36  fw6 mb16">Challenges</div>
            <div className="challenge-contant lh34  fw3  mb24">
              The main challenge we faced with NFTs, being a novel concept, was
              to simplify it so that any user could easily engage and understand
              this new market.{" "}
              <p className="">
                Furthermore, with numerous NFT-based apps emerging, all having
                similar UI designs, our primary focus was to create a unique and
                distinctive interface that would stand out from the rest.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="lyfex-project-timeline wrapper">
        <div>
          <div className="lyfex-section p8">
            <div className="lyfex-project-heading fs42 pb32">
              Lyfex <b>Project Timeline</b>
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
              <div className="crafting-heading fs26 fc11 mb32">
                Crafting experiences
              </div>
              <div className="crafting-heading-2 fs48 lh60">
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
          <div className="crafting-images df">
            <div className=" mr24">
              <img src={krona} alt="krona_image" />
            </div>
            <div className="">
              <img src={barlow} alt="barlow_image" />
            </div>
          </div>
          <div className="crafting-images ptb32">
            <img src={fonts} alt="lyefx_fonts_image" />
          </div>
          <div className="wireframes ptb48 tac bg13">
            <img src={mobilewireframe1} alt="Mobile-wireframe1" />
            <img src={mobilewireframe2} alt="Mobile-wireframe2" />
            <img src={webwirefram} alt="Web-wireframe" />
          </div>
          <div className="wireframes ptb48 tac bg11 mt64">
            <img src={Final1} alt="Final1" />
            <img src={Final2} alt="Final2" />
            <img src={webdesign} alt="webdesign" />
            <img src={subPage1} alt="subPage1" />
            <img src={subpage2} alt="subPage2" />
          </div>
        </div>
      </section>
    </>
  );
};
