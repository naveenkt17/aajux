import React from "react";
import { Link } from "react-router-dom";
import Companypage from "../../images/company-page.png";
import "./Company.css";
import harminder from "../../images/Harminder-singh.png";
import james from "../../images/James-Cronan.png";
import GroupImg from "../../images/1st.png";
import { CustomerTestimonial } from "./CustomerTestimonial";
import Image1 from "../../images/Ed-tech.jpg";
import Image2 from "../../images/ESG.png";
import Image3 from "../../images/ESG-Website.png";
import Image4 from "../../images/Freeletics.jpg";
import Image5 from "../../images/Barber.jpeg";
import Edge from "../../Logo Images/edge.svg" 
import IBM from "../../Logo Images/ibm.svg" 
import Juniper from "../../Logo Images/junipor.png" 
import freshmind from "../../Logo Images/freshminds.svg" 
import nops from "../../Logo Images/nops.svg" 
import Esg from "../../Logo Images/ESG-3.svg"
import talowiz from "../../Logo Images/talowiz.svg"
import TIG from "../../Logo Images/tig-1.svg"
import ariglad from "../../Logo Images/ariglad.svg"
import edvanza from "../../Logo Images/edvanza.svg"
import GlobalU from "../../Logo Images/global.png"
import Chargezoom from "../../Logo Images/cz_logo.svg"
import jobrock from "../../Logo Images/jobrocks-1.svg"
import esl from "../../Logo Images/esl.svg"
import strange from "../../Logo Images/strange.svg"
import mesha from "../../Logo Images/mesha-1.svg"

export const Company = () => {
  return (
    <>
      <section className="project-banner-01 bg11">
        <div className="wrapper df pt48 lh28 ptb100 ">
          <div className="page-intro-heading  flx50">
            <div className="page-intro-heading2 fs18 fw5 pl4 mb16">
              From Sydney to London to Silicon Valley
            </div>
            <div className="page-intro-heading3 fs48 fw8 lh60 mb24">
              Unveiling UI/UX Studio Vision and Impact
            </div>

            <div className="page-intro-contant lh40 fc11 mb24">
              <span className="fw6">
                We are a leading design agency committed to deliver high-quality
                services and forming partnerships with global enterprises, small
                businesses, and startups.
              </span>
            </div>
            <Link to="/contact" className="page-btn ttu fs16 fw7 p16 get-in-touch fw6 mb32">
              <span className="fc2">GET IN TOUCH</span>
            </Link>
          </div>
          <div className="page-img ml48">
            <img src={Companypage} alt="Page-Intro-Img" />
          </div>
        </div>
      </section>
      <section className="wrapper ptb100">
        <div className="company-banner-contant pt48">
          <div className="company-banner-heading fw5 fs18 mb24">
            Innovative support
          </div>
          <div className="company-banner-contant fw5 fs42 lh60 mb116">
            Diligence and earnestness are what we aim at. Our{" "}
            <span>powerful designs</span> are the fruit of our creativity. We
            don’t just work; we create masterpieces for the{" "}
            <span>digital world.</span>
          </div>
        </div>
      </section>
      <section className="bg11">
        <div className="wrapper df pt48 lh28 ptb100 ">
          <div className="company-core-heading  flx50">
            <div className="company-core-heading2 fs18 fw5 pl4 mb16">
              Core offshore values
            </div>
            <div className="company-core-heading3 fs48 fw5 lh60 mb24">
              Our Company <span>Core Values</span> That Define Us
            </div>

            <div className="company-core-contant lh40 fc11 mb24">
              <span className="fw6">
                A design agency’s values shape its essence. Integrity drives
                transparency, innovation fuels creativity, and empathy guides
                client relations. Excellence ensures top-tier craftsmanship, all
                grounded in sustainability. These values define the agency, its
                commitment, and impactful design solutions
              </span>
            </div>
          </div>
          <div>
            <div className="company-core1 ml48 pb28">
              <h4 className="fw6 fs26 pb16">Seamless Global Collaboration:</h4>
              <p className="lh40">
                Bridging borders, we collaborate flawlessly across distances,
                using advanced tools to ensure our offshore UI/UX designs
                integrate seamlessly with your company’s vision.
              </p>
            </div>
            <div className="company-core2 ml48 pb28">
              <h4 className="fw6 fs26 pb16">Seamless Global Collaboration:</h4>
              <p className="lh40">
                Bridging borders, we collaborate flawlessly across distances,
                using advanced tools to ensure our offshore UI/UX designs
                integrate seamlessly with your company’s vision.
              </p>
            </div>
            <div className="company-core3 ml48 pb28">
              <h4 className="fw6 fs26 pb16">Seamless Global Collaboration:</h4>
              <p className="lh40">
                Bridging borders, we collaborate flawlessly across distances,
                using advanced tools to ensure our offshore UI/UX designs
                integrate seamlessly with your company’s vision.
              </p>
            </div>
            <div className="company-core4 ml48 pb28">
              <h4 className="fw6 fs26 pb16">Seamless Global Collaboration:</h4>
              <p className="lh40">
                Bridging borders, we collaborate flawlessly across distances,
                using advanced tools to ensure our offshore UI/UX designs
                integrate seamlessly with your company’s vision.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="wrapper pt48 lh28 ptb64 ">
          <div className="Certainty-Since tac">
            <div className="Certainty-Since-Heading">
              <p>Certainty Since 2015</p>
            </div>
            <div className="Certainty-Since-contant fs32 fw5 lh56">
              <p>
                Maximum efficiency, result oriented approach and{" "}
                <span>satisfied customers</span> is what we aim at.
              </p>
            </div>
          </div>
          <div className="box-center mt64 jcse tac brd-b2 ">
            <div className="pb24">
              <div className="Certainty-Since-num fw7 fs32   pb24">8+</div>
              <div>Years of Excellence</div>
            </div>
            <div className="pb24">
              <div className="Certainty-Since-num fw7 fs32  pb24">120+</div>
              <div>Clients Worldwide</div>
            </div>
            <div className="pb24">
              <div className="Certainty-Since-num fw7 fs32  pb24">1750+</div>
              <div>Projects Delivered</div>
            </div>
            <div className="pb24 ">
              <div className="Certainty-Since-num fw7 fs32 pb24">48000+</div>
              <div>Cup of Coffee</div>
            </div>
          </div>
          <div className="wrapper ptb100 fw5 ">
            <div className="pb24">Statement of purpose</div>
            <div className=" lh40 fs20">
              <p>
                Being a global UIUX design agency, our foremost objective is to
                provide all-encompassing design and technical talent assistance
                to companies functioning in diverse industries. Functioning as a
                dedicated offshore office, we extend our proficiency to
                supervise and amplify our clients’ undertakings.
              </p>
              <br />
              <p>
                Our organization is fundamentally motivated by the goal of
                empowering businesses to accomplish their strategic objectives
                through the utilization of our creative and technological
                proficiencies. Our adaptable engagement frameworks prove
                beneficial for enterprises of varying magnitudes, ranging from
                multinational corporations and budding startups to digital
                agencies, small businesses, and forward-thinking tech providers.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg11 ptb100">
        <div className=" wrapper pioneers tac ">
          <div className="pioneers-Heading">
            <p>About the pioneers</p>
          </div>
          <div className="pioneers-sub-contant fs36 fw5 lh56 aft">
            <p>
              Visionaries Leaders Paving the <span>Path to Success</span>
            </p>
          </div>
          <div className="pioneers-Heading-contant lh24 fs18 pt16">
            <p>
              Meet directors, the visionary leaders of UIUX Studio. With a
              relentless drive for innovation and a passion for excellence, they
              have been instrumental in shaping the company’s growth and
              success.
            </p>
          </div>
          <div className="pioneers-img df jcc tac pt32 lh28">
            <div>
              <img src={harminder} alt="" />
              <div>Harminder Singh</div>
              <div>Director</div>
              <div className="icon v-center jcc">
                <span className=" w48 h48 box-center brd3 ">in</span>
                <span className=" w48 h48 box-center brd3 ">f</span>
              </div>
            </div>
            <div>
              <img src={james} alt="" />
              <div>James Cronan</div>
              <div>Director</div>
              <div className="icon v-center jcc">
                <span className=" w48 h48 box-center brd3 ">in</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="wrapper ptb100">
        <div className="company-commitments-contant pt48">
          <div className="company-commitments-heading fw5 fs16 mb24">
            Our D&I commitments
          </div>
          <div className="company-commitments-contant fw6 fs16 lh34 mb116">
            At UIUX Studio, we prioritize holistic well-being, ensuring our team
            thrives both at work and beyond. Inclusivity fuels our creativity
            and success. We’re dedicated to crafting a workplace where all
            voices are valued, fostering a sense of belonging. Our commitment to
            anti-racism actively shapes our culture. Together, we build a
            representative team, amplifying unique perspectives for creative
            excellence.
          </div>
          <div className="company-commitments-img">
            <img src={GroupImg} alt="" />
          </div>
        </div>
        <CustomerTestimonial className={"pb28"} />
      </section>
      <section>
        <div className="wrapper ptb32">
          <div>
            <div className=" mb24">Our portfolio</div>
            <div className="fw6 fs32 mb32">Our Latest Work</div>
          </div>
          <div className="latest-work df ">
            <img src={Image1} alt="images" />
            <img src={Image2} alt="images" />
            <img src={Image3} alt="images" />
            <img src={Image4} alt="images" />
            <img src={Image5} alt="images" />
          </div>
        </div>
      </section>
      <section className="bg11 ">
        <div className="wrapper ptb100 ">
          <div>
            <div className="logo-heading mb24">Our partner</div>
            <div className="logo-contant fw5 fs32 mb32">Our Happy Clients</div>
          </div>
          <div className="logo">
            <div className="logo-img1 v-center jcsb pb48 pt32">
              <img src={Edge} alt="Edge_image"/>
              <img src={IBM} alt="IBM_image"/>
              <img src={Juniper} alt="Junipor_image"/>
              <img src={freshmind} alt="freshmind_img"/>
              <img src={nops} alt="Nops_image"/>
            </div>
            <div className="logo-img2 v-center jcsb pb48 ">
              <img src={Esg} alt="Esg_image"/>
              <img src={talowiz} alt="talowiz_image"/>
              <img src={TIG} alt="tig_image"/>
              <img src={ariglad} alt="ariglad_img"/>
              <img src={edvanza} alt="edvanza_image"/>
            </div>
            <div className="logo-img3 v-center jcsb pb48 ">
              <img src={GlobalU} alt="Global_image"/>
              <img src={Chargezoom} alt="chargezoom_image"/>
              <img src={jobrock} alt="jobrock_image"/>
              <img src={esl} alt="esl_img"/>
              <img src={strange} alt="strange_image"/>
            </div><div className="logo-img4 v-center jcsb  ">
              <img src={mesha} alt="mesha_image"/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
