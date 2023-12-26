import React from "react";
import { Link } from "react-router-dom";


export const PagesHeading = () => {
  return (
    <>
      <section className="page-heading ptb64">
        <div className="wrapper">
          <div className="service-page-contant pt48">
            <div className="service-page-heading fw5 fs20 mb24">Services onboard</div>
            <div className="service-contant fw4 fs36 mb64">
              Proficiency at<span className="fw7" > all levels.</span> A team that works as your team. <b>Expert professionals</b> with hands on <b>latest technologies</b>
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
                <Link className="brd-b1 pb8 fc2 fc-h2 df ais mr24">
                  <span className="v-center  h24 mr12 mt4 fs20 fw7">→</span>User
                  Experience Research
                </Link>
              </li>
              <li className="flx50 pt24">
                <Link className="brd-b1 pb8 fc2 fc-h2 df ais ml24">
                  <span className="v-center h24 mr12 mt4 fs20">→</span>Heuristic
                  Analysis
                </Link>
              </li>
              <li className="flx50 pt24">
                <Link className="brd-b1 pb8 fc2 fc-h2 df ais mr24">
                  <span className="v-center h24 mr12 mt4 fs20 fw7">→</span>
                  Product Research
                </Link>
              </li>
              <li className="flx50 pt24">
                <Link className="brd-b1 pb8 fc2 fc-h2 df ais ml24">
                  <span className="v-center h24 mr12 mt4 fs20">→</span>Persona
                  Development
                </Link>
              </li>
              <li className="flx50 pt24">
                <Link className="brd-b1 pb8 fc2 fc-h2 df ais mr24">
                  <span className="v-center h24 mr12 mt4 fs20 fw7">→</span>
                  Competitive Analysis
                </Link>
              </li>
              <li className="flx50 pt24">
                <Link className="brd-b1 pb8 fc2 fc-h2 df ais ml24">
                  <span className="v-center h24 mr12 mt4 fs20">→</span>SWOT
                  Analysis
                </Link>
              </li>
              <li className="flx50 pt24">
                <Link className="brd-b1 pb8 fc2 fc-h2 df ais mr24">
                  <span className="v-center h24 mr12 mt4 fs20 fw7">→</span>User
                  Journey Evaluation
                </Link>
              </li>
              <li className="flx50 pt24">
                <Link className="brd-b1 pb8 fc2 fc-h2 df ais ml24">
                  <span className="v-center h24 mr12 mt4 fs20">→</span>
                  Information Architecture Analysis
                </Link>
              </li>
              <li className="flx50 pt24">
                <Link className="brd-b1 pb8 fc2 fc-h2 df ais mr24">
                  <span className="v-center h24 mr12 mt4 fs20 fw7">→</span>
                  Usability Testing
                </Link>
              </li>
              <li className="flx50 pt24">
                <Link className="brd-b1 pb8 fc2 fc-h2 df ais ml24">
                  <span className="v-center h24 mr12 mt4 fs20">→</span>UX/UI
                  Audit
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
