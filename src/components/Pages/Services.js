import React from "react";
import { PagesIntro } from "./PagesIntro";
import { Link } from "react-router-dom";
import '../Pages/Service.css';
import { CustomerTestimonial } from "./CustomerTestimonial";


const Services = () => {
  return (
    <div>
      <PagesIntro />
      <section className="page-heading ptb64">
        <div className="wrapper">
          <div className="service-page-contant pt48">
            <div className="service-page-heading fw5 fs20 mb24">
              Services onboard
            </div>
            <div className="service-contant fw4 fs36 mb116">
              Proficiency at<span className="fw7"> all levels.</span> A team
              that works as your team. <b>Expert professionals</b> with hands on{" "}
              <b>latest technologies</b>
            </div>
          </div>
        </div>
        <div className="wrapper df jcsb pb64 brd-b1">
          <div className="page-contant pr24 tal flx50">
            <div className="page-num  br50 fs20 w48 h48 brd3 box-center mt24 mb32">
              01
            </div>
            <div className="page-heading fs42 fw7 lh56 ">
              <h2>Research</h2>
            </div>
            <div className="page-main-contant lh34 fc11 pb24 pt12">
              <p>
                Our research services span a broad spectrum, from user
                experience research to product analysis. We delve deeply to
                unveil insights that shape exceptional digital solutions,
                ensuring that your offerings align seamlessly with user needs.
              </p>
            </div>
            <Link to="/contact" className="page-btn ttu fs16 fw7 bg p16 get-in-touch fw6">
              <span className="fc2">Get in touch</span>
            </Link>
          </div>
          <div className="page-lists  flx1 fc2 lh34 fc-h2  ">
            <ul className="df fww ais">
              <li className="flx50 pt24">
                <Link to= "/services/user-experince" className="brd-b1 pb8 fc2 fc-h2 df ais mr24"  >
                  <span className="v-center  h24 mr12 mt4 fs20 fw7">→</span>
                  User Experience Research
                </Link>
              </li>
              <li className="flx50 pt24">
                <Link to="/services/heuristic-analysis" className="brd-b1 pb8 fc2 fc-h2 df ais ml24">
                  <span className="v-center h24 mr12 mt4 fs20">→</span>Heuristic
                  Analysis
                </Link>
              </li>
              <li className="flx50 pt24">
                <Link to="/services/product-research" className="brd-b1 pb8 fc2 fc-h2 df ais mr24">
                  <span className="v-center h24 mr12 mt4 fs20 fw7">→</span>
                  Product Research
                </Link>
              </li>
              <li className="flx50 pt24">
                <Link to="/services/persona-development" className="brd-b1 pb8 fc2 fc-h2 df ais ml24">
                  <span className="v-center h24 mr12 mt4 fs20">→</span>Persona
                  Development
                </Link>
              </li>
              <li className="flx50 pt24">
                <Link to="/services/competitive-analysis" className="brd-b1 pb8 fc2 fc-h2 df ais mr24">
                  <span className="v-center h24 mr12 mt4 fs20 fw7">→</span>
                  Competitive Analysis
                </Link>
              </li>
              <li className="flx50 pt24">
                <Link to="/services/swot-analysis" className="brd-b1 pb8 fc2 fc-h2 df ais ml24">
                  <span className="v-center h24 mr12 mt4 fs20">→</span>SWOT
                  Analysis
                </Link>
              </li>
              <li className="flx50 pt24">
                <Link to="/services/user-journey-evaluation" className="brd-b1 pb8 fc2 fc-h2 df ais mr24">
                  <span className="v-center h24 mr12 mt4 fs20 fw7">→</span>User
                  Journey Evaluation
                </Link>
              </li>
              <li className="flx50 pt24">
                <Link to="/services/information-architecture-analysis" className="brd-b1 pb8 fc2 fc-h2 df ais ml24">
                  <span className="v-center h24 mr12 mt4 fs20">→</span>
                  Information Architecture Analysis
                </Link>
              </li>
              <li className="flx50 pt24">
                <Link to="/services/usability-testing" className="brd-b1 pb8 fc2 fc-h2 df ais mr24">
                  <span className="v-center h24 mr12 mt4 fs20 fw7">→</span>
                  Usability Testing
                </Link>
              </li>
              <li className="flx50 pt24">
                <Link to="/services/ux-ui-audit" className="brd-b1 pb8 fc2 fc-h2 df ais ml24">
                  <span className="v-center h24 mr12 mt4 fs20">→</span>UX/UI
                  Audit
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="wrapper df jcsb pb64 brd-b1 mt176">
          <div className="page-contant pr24 tal flx50">
            <div className="page-num  br50 fs20 w48 h48 brd3 box-center mt24 mb32">
              02
            </div>
            <div className="page-heading fs42 fw7 lh56 ">
              <h2>Design</h2>
            </div>
            <div className="page-main-contant lh34 fc11 pb24 pt12">
              <p>
                Our design expertise, complemented by the latest technologies,
                brings captivating user experiences to life. From brand design
                to prototyping, we craft interfaces that resonate, ensuring
                immersive user engagement.
              </p>
            </div>
            <Link to="/contact" className="page-btn ttu fs16 fw7 bg p16 get-in-touch fw6">
              <span className="fc2">Get in touch</span>
            </Link>
          </div>
          <div className="page-lists  flx1 fc2 lh34 fc-h2  ">
            <ul className="df fww ais">
              <li className="flx50 pt24">
                <Link to="/services/brand-design" className="brd-b1 pb8 fc2 fc-h2 df ais mr24">
                  <span className="v-center  h24 mr12 mt4 fs20 fw7">→</span>
                  Brand Design
                </Link>
              </li>
              <li className="flx50 pt24">
                <Link to="/services/motion-and-animation" className="brd-b1 pb8 fc2 fc-h2 df ais ml24">
                  <span className="v-center h24 mr12 mt4 fs20">→</span>Motion
                  and Animation
                </Link>
              </li>
              <li className="flx50 pt24">
                <Link to="/services/user-experience-design" className="brd-b1 pb8 fc2 fc-h2 df ais mr24">
                  <span className="v-center h24 mr12 mt4 fs20 fw7">→</span>
                  User Experience Design
                </Link>
              </li>
              <li className="flx50 pt24">
                <Link to="/services/design-system" className="brd-b1 pb8 fc2 fc-h2 df ais ml24">
                  <span className="v-center h24 mr12 mt4 fs20">→</span>Design
                  System
                </Link>
              </li>
              <li className="flx50 pt24">
                <Link to="/services/user-interface-design" className="brd-b1 pb8 fc2 fc-h2 df ais mr24">
                  <span className="v-center h24 mr12 mt4 fs20 fw7">→</span>
                  User Interface Design
                </Link>
              </li>
              <li className="flx50 pt24">
                <Link to="/services/illustrations-and-iconography" className="brd-b1 pb8 fc2 fc-h2 df ais ml24">
                  <span className="v-center h24 mr12 mt4 fs20">→</span>
                  Illustrations and <br /> Iconography
                </Link>
              </li>
              <li className="flx50 pt24">
                <Link to="/services/prototyping-and-interaction-design" className="brd-b1 pb8 fc2 fc-h2 df ais mr24">
                  <span className="v-center h24 mr12 mt4 fs20 fw7">→</span>
                  Prototyping and Interaction Design
                </Link>
              </li>
              <li className="flx50 pt24">
                <Link to="/services/graphic-design" className="brd-b1 pb8 fc2 fc-h2 df ais ml24">
                  <span className="v-center h24 mr12 mt4 fs20">→</span>
                  Graphic Design
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="wrapper df jcsb pb64 brd-b1 mt176">
          <div className="page-contant pr24 tal flx50">
            <div className="page-num  br50 fs20 w48 h48 brd3 box-center mt24 mb32">
              03
            </div>
            <div className="page-heading fs42 fw7 lh56 ">
              <h2>Develop</h2>
            </div>
            <div className="page-main-contant lh34 fc11 pb24 pt12">
              <p>
                Our development services blend innovation and seamless
                execution. From front-end to mobile applications, we translate
                concepts into robust digital realities, seamlessly aligned with
                your distinct objectives.
              </p>
            </div>
            <Link to="/contact" className="page-btn ttu fs16 fw7 bg p16 get-in-touch fw6">
              <span className="fc2">Get in touch</span>
            </Link>
          </div>
          <div className="page-lists  flx1 fc2 lh34 fc-h2  ">
            <ul className="df fww ais">
              <li className="flx50 pt24">
                <Link to="/services/front-end-development" className="brd-b1 pb8 fc2 fc-h2 df ais mr24">
                  <span className="v-center  h24 mr12 mt4 fs20 fw7">→</span>
                  Front-End Development
                </Link>
              </li>
              <li className="flx50 pt24">
                <Link to="/services/mobile-applications" className="brd-b1 pb8 fc2 fc-h2 df ais ml24">
                  <span className="v-center h24 mr12 mt4 fs20">→</span>Mobile
                  Applications
                </Link>
              </li>
              <li className="flx50 pt24">
                <Link className="brd-b1 pb8 fc2 fc-h2 df ais mr24">
                  <span className="v-center h24 mr12 mt4 fs20 fw7">→</span>
                  Website Development
                </Link>
              </li>
              <li className="flx50 pt24">
                <Link className="brd-b1 pb8 fc2 fc-h2 df ais ml24">
                  <span className="v-center h24 mr12 mt4 fs20">→</span>SAAS
                  Development
                </Link>
              </li>
              <li className="flx50 pt24">
                <Link className="brd-b1 pb8 fc2 fc-h2 df ais mr24">
                  <span className="v-center h24 mr12 mt4 fs20 fw7">→</span>
                  CMS Development
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="wrapper df jcsb pb64 brd-b1 mt176">
          <div className="page-contant pr24 tal flx50">
            <div className="page-num  br50 fs20 w48 h48 brd3 box-center mt24 mb32">
              04
            </div>
            <div className="page-heading fs42 fw7 lh56 ">
              <h2>All In One Service</h2>
            </div>
            <div className="page-main-contant lh34 fc11 pb24 pt12">
              <p>
                Our holistic approach offers all-encompassing solutions, from
                SaaS design to SAAS development. Bridge your ideas with
                cutting-edge technology to ensure comprehensive and lasting
                success.
              </p>
            </div>
            <Link to="/contact" className="page-btn ttu fs16 fw7 bg p16 get-in-touch fw6">
              <span className="fc2">Get in touch</span>
            </Link>
          </div>
          <div className="page-lists  flx1 fc2 lh34 fc-h2  ">
            <ul className=" fww ais">
              <li className="flx50 pt24">
                <Link className="brd-b1 pb8 fc2 fc-h2 df ais mr24">
                  <span className="v-center  h24 mr12 mt4 fs20 fw7">→</span>SaaS
                  Design
                </Link>
              </li>
              {/* <li className="flx50 pt24">
                <Link className="brd-b1 pb8 fc2 fc-h2 df ais ml24">
                  <span className="v-center h24 mr12 mt4 fs20">→</span>Motion and Animation
                </Link>
              </li> */}
              <li className="flx50 pt24">
                <Link className="brd-b1 pb8 fc2 fc-h2 df ais mr24">
                  <span className="v-center h24 mr12 mt4 fs20 fw7">→</span>
                  Website Design
                </Link>
              </li>
              {/* <li className="flx50 pt24">
                <Link className="brd-b1 pb8 fc2 fc-h2 df ais ml24">
                  <span className="v-center h24 mr12 mt4 fs20">→</span>Design System
                </Link>
              </li> */}
              <li className="flx50 pt24">
                <Link className="brd-b1 pb8 fc2 fc-h2 df ais mr24">
                  <span className="v-center h24 mr12 mt4 fs20 fw7">→</span>
                  Mobile Applications Design
                </Link>
              </li>
              {/* <li className="flx50 pt24">
                <Link className="brd-b1 pb8 fc2 fc-h2 df ais ml24">
                  <span className="v-center h24 mr12 mt4 fs20">→</span>Illustrations and <br/> Iconography
                </Link>
              </li>
              <li className="flx50 pt24">
                <Link className="brd-b1 pb8 fc2 fc-h2 df ais mr24">
                  <span className="v-center h24 mr12 mt4 fs20 fw7">→</span>Prototyping and Interaction Design
                </Link>
              </li>
              <li className="flx50 pt24">
                <Link className="brd-b1 pb8 fc2 fc-h2 df ais ml24">
                  <span className="v-center h24 mr12 mt4 fs20">→</span>
                  Graphic Design
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
        <CustomerTestimonial/>
      </section>
    </div>
  );
};

export default Services;
