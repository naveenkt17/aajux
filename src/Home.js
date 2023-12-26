import React, { useState, useEffect, useRef } from "react";
import Hero from "./components/Hero/Hero";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "./context";
import "intersection-observer";


const Home = () => {
  const targetRef = useRef(null);
  const [translateX, setTranslateX] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isMaxWidth, setIsMaxWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Get the scroll position along the Y-axis (vertical scroll)
      const newScrollY = window.scrollY;

      if (isVisible) {
        // If the animated box is visible, set translateX to 0
        setTranslateX(0);
      } else {
        // Calculate the new translateX value based on the scrollY value
        const newTranslateX = -newScrollY / 2; // Adjust this as needed for desired speed

        // Calculate the maximum allowable translateX value based on the screen width
        const screenWidth = window.innerWidth;
        const wrapperWidth = targetRef.current.clientWidth;
        const maxTranslateX = (screenWidth - wrapperWidth) / 2;

        // Limit the translateX value to stay within the screen bounds
        const limitedTranslateX = Math.max(
          -maxTranslateX,
          Math.min(maxTranslateX, newTranslateX)
        );

        // Update the state to trigger a re-render with the new translateX value
        setTranslateX(limitedTranslateX);
        setIsMaxWidth(maxTranslateX);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const { updateHero } = useGlobalContext();
  const { updateHome } = useGlobalContext();
  useEffect(() => {
    updateHome();
    updateHero();
  }, );

  const { name } = useGlobalContext();
  return (
    <div className='App'>
      <Hero className='App-Hero' />

      <main className='pr zi1'>
        <section className='introduce-us w100 ptb40 bg6 ofh'>
          {/* <div className='hero-marquee f100 bg6 ofh merquee'>
            <p className='ttu fc9 wsnw'>
              Design - Stretegy - Research - Design- Stretegy - Research -
              Design- Stretegy - Research - Design
            </p>
          </div> */}
          <div className='wrapper'>
            <h2 className='section-heading fc2 pb8 pt40'>
              {name} is about <br />
              Resonating with People.
            </h2>

            <div
              ref={targetRef}
              className={`intro-blocks v-center fdc mt40 pt40 ${
                isVisible ? "visible" : ""
              }`}
            >
              <div className='intro-block ff2 fw7 box-center'>
                <p
                  className='fs104 fw5 ls1 mr24 transit1'
                  style={{
                    transform: `translateX(${
                      -isMaxWidth + translateX * -0.5
                    }px)`,
                  }}
                >
                  Calling
                </p>
                <img
                  src='./images/intro01.jpg'
                  alt='introduction all'
                  className='flx24 br2'
                />
                <p className='fs104 fw5 ls1 ml24'>All</p>
              </div>
              <div className='intro-block ff2 fw7 box-center mt40'>
                <img
                  src='./images/intro02.jpg'
                  alt='Enterpenure'
                  className='flx16 br2'
                />
                <p className='fs104 fw5 ls1 ml24'>Entrepreneur</p>
              </div>
              <div
                className='intro-block ff2 fw7 box-center mt40'
                style={{
                  transform: `translateX(-10%)`,
                  transition: "transform 0.3s ease",
                }}
              >
                <p className='fs104 fw5 ls1 mr24'>Makers</p>
                <img
                  src='./images/intro03.jpg'
                  alt='Enterpenure'
                  className='flx16 br2'
                />
                <p className='fs104 fw5 ls1 ml24'>And</p>
              </div>
              <div
                className='intro-block ff2 fw7 box-center mt40'
                style={{
                  transform: `translateX(${translateX * -1.5}px)`,
                  transition: "transform 0.3s ease",
                }}
              >
                <img
                  src='./images/intro02.jpg'
                  alt='Enterpenure'
                  className='flx16 br2'
                />
                <p className='fs104 fw5 ls1 mlr24'>Dreamers</p>
                <img
                  src='./images/intro01.jpg'
                  alt='Enterpenure'
                  className='flx16 br2'
                />
              </div>
              <div className='intro-blocks-data flx100 ass w100 df mt40 pt40 pb48 jcsb'>
                <article className='section-left flx60 mr40 pr32 brd-r1'>
                  <p className='fs22 lh34'>
                    Aajux is a leading global creative consultancy, part of
                    Capgemini Invent. Partnering with passionate leaders and
                    visionary entrepreneurs, we apply creativity, strategy,
                    design and data to re-invent businesses, drive growth and
                    orchestrate customer centric transformation.
                  </p>
                  <p className='fs22 lh34 mt40'>
                    Partnering with passionate leaders and visionary
                    entrepreneurs, we apply creativity, strategy, design and
                    data to re-invent businesses, drive growth and orchestrate
                    customer centric transformation.
                  </p>
                  <NavLink
                    to='/'
                    className='fs18 bg9 dif aic pr24 h48 fc1 br2 mt40'
                  >
                    <span className='material-symbols-outlined pl24 pr16 mr16 bg4 h48 box-center'>
                      {" "}
                      read_more{" "}
                    </span>
                    Explore More
                  </NavLink>
                </article>
                <article className='section-right flx1 df fdc aie'>
                  <div className='intro-links'>
                    <p className='fs28 lh34 fw5 intro-link-text'>
                      Find out what your customers really care about
                    </p>
                    <NavLink
                      to='/'
                      className='intro-link il-fc1 mt16 fc4 brd-b3 dif pb8 fc-h3 bg-h2 pt4 pr8'
                    >
                      User Research, Testing & Insights
                    </NavLink>
                  </div>
                  <div className='intro-links mt48'>
                    <p className='fs28 lh34 fw5 intro-link-text'>
                      Create brilliant products that work for your users
                    </p>
                    <NavLink
                      to='/'
                      className='intro-link il-fc1 mt16 fc3 brd-b4 dif pb8 fc-h3 bg-h2 pt4 pr8'
                    >
                      UX, UI & Product Design
                    </NavLink>
                  </div>
                  <div className='intro-links mt48'>
                    <p className='fs28 lh34 fw5 intro-link-text'>
                      Bring UX into your transformation programme
                    </p>
                    <NavLink
                      to='/'
                      className='intro-link il-fc1 mt16 fc4 brd-b3 dif pb8 fc-h3 bg-h2 pt4 pr8'
                    >
                      UX teams, Capability & Service Design
                    </NavLink>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
        <section className='design-process ptb40 bg2' id='design-process'>
          <div className='wrapper pt40'>
            <h2 className='section-heading pb8 pt40 fc1'>
              The Design Process - Collapsing <br />
              and merging design process
            </h2>
            <div className='w100 dp-blocks h-center mt40 fww'>
              <div className='dp-block h-center aisc pr flx50'>
                <img
                  src='./images/dp01.jpg'
                  alt='introduction all'
                  className='br2 w100'
                />
                <div className='dp-overlay pa t0 r0 b0 l0 bg1-trans-5'></div>
                <div className='dp-block-text pa b0 l0 w100 p16 mb40 tac'>
                  <p className='fw5 fs18 ls1 fc5 mb8'>Resonate through</p>
                  <p className='fw7 fs48 ttu ls1 fc5'>Design</p>
                </div>
              </div>
              <div className='dp-block h-center aisc pr flx50'>
                <img
                  src='./images/dp02.jpg'
                  alt='introduction all'
                  className='br2 w100'
                />
                <div className='dp-overlay pa t0 r0 b0 l0 bg1-trans-5'></div>
                <div className='dp-block-text pa b0 l0 w100 p16 mb40 tac'>
                  <p className='fw5 fs18 ls1 fc5 mb8'>Resonate through</p>
                  <p className='fw7 fs48 ttu ls1 fc5'>Wireframe</p>
                </div>
              </div>
              <div className='dp-block h-center aisc pr flx50'>
                <img
                  src='./images/dp03.jpg'
                  alt='introduction all'
                  className='br2 w100'
                />
                <div className='dp-overlay pa t0 r0 b0 l0 bg1-trans-5'></div>
                <div className='dp-block-text pa b0 l0 w100 p16 mb40 tac'>
                  <p className='fw5 fs18 ls1 fc5 mb8'>Resonate through</p>
                  <p className='fw7 fs48 ttu ls1 fc5'>Prototype</p>
                </div>
              </div>
              <div className='dp-block h-center aisc pr flx50'>
                <img
                  src='./images/dp04.jpg'
                  alt='introduction all'
                  className='br2 w100'
                />
                <div className='dp-overlay pa t0 r0 b0 l0 bg1-trans-5'></div>
                <div className='dp-block-text pa b0 l0 w100 p16 mb40 tac'>
                  <p className='fw5 fs18 ls1 fc5 mb8'>Resonate through</p>
                  <p className='fw7 fs48 ttu ls1 fc5'>Research</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='industry ptb40'>
          <div className='wrapper pt40 pb40'>
            <h2 className='section-heading fc2 pb8 pt40'>
              Services We Offer .
            </h2>

            <div className='industry-blocks mt40 pb40'>
              <div className='industry-block ff2 fw7 df jcsb ptb64'>
                <p className='fs104 fw4 ls1 mr24 fc-h2 cp transit1 tf-h1'>
                  Come up with ideas
                </p>
                <span className='material-symbols-outlined fs104 fc-h2 cp'>
                  close
                </span>
              </div>
              <div className='industry-block ff2 fw7 df jcsb ptb64'>
                <p className='fs104 fw4 ls1 mr24 fc-h4 cp transit1 tf-h1'>
                  Connect as a team
                </p>
                <span className='material-symbols-outlined fc-h4 fs104 dn'>
                  close
                </span>
              </div>
              <div className='industry-block ff2 fw7 df jcsb ptb64'>
                <p className='fs104 fw4 ls1 mr24 fc-h1 cp transit1 tf-h1'>
                  Make a plan
                </p>
                <span className='material-symbols-outlined fc-h1 fs104 dn'>
                  close
                </span>
              </div>
              <div className='industry-block ff2 fw7 df jcsb ptb64'>
                <p className='fs104 fw4 ls1 mr24 fc-h5 cp transit1 tf-h1'>
                  Coordinate and align
                </p>
                <span className='material-symbols-outlined fc-h5 fs104 dn'>
                  close
                </span>
              </div>
            </div>
            <div className='offer-cta v-center jcsb pb48'>
              <p className='fs18'>
                Hundreds of options for whatever your team needs.
              </p>
              <NavLink to='/' className='fs18 bg9 v-center pr24 h48 fc1 br2'>
                <span className='material-symbols-outlined pl24 pr16 mr16 bg4 h48 box-center'>
                  {" "}
                  arrow_forward_ios{" "}
                </span>
                Explore All Offers
              </NavLink>
            </div>
          </div>
        </section>

        <section className='our-offers ptb40 bg4'>
          <div className='wrapper pt40'>
            <div className='nav-tabs-grp fc1 ofh'>
              <ul className='nav-tabs ttu v-center jcsb pb24 brd-b1'>
                <li className='nav-tab pr transit1 cp active'>Automative</li>
                <li className='nav-tab pr transit1 cp'>Media</li>
                <li className='nav-tab pr transit1 cp'>Retails</li>
                <li className='nav-tab pr transit1 cp'>Educations</li>
                <li className='nav-tab pr transit1 cp'>Gaming</li>
                <li className='nav-tab pr transit1 cp'>Health & Wellness</li>
              </ul>
            </div>
            <div className='offers-blocks mt40'>
              <div className='offers-block fw7 df jcsb ptb64 fww'>
                <p className='fs32 fw4 ls1 mr24 fc1 lh48'>
                  Partnered with one of the nation's largest automotive
                  manufacturers, and bolstered test drive bookings through
                  digital channels by 35%
                </p>
                <NavLink
                  to='/'
                  className='l-more-btn fc1 mt48 fs18 fw4 ofh h48 dif fdc'
                >
                  <span className='lm-btn v-center transit2'>
                    Learn More
                    <span className='material-symbols-outlined ml4'>
                      arrow_forward
                    </span>
                  </span>
                  <span className='lgo-btn v-center brd-b1 transit2 pb4 ls1'>
                    Let's Go{" "}
                    <img src='icons/go.svg' alt='lets go' className='w24 ml8' />
                  </span>
                </NavLink>
              </div>
            </div>
            <div className='nxt-prv-btn aic dif'>
              <p className='prv-btn'>
                <span className='material-symbols-outlined mr24 fs48 fc1'>
                  arrow_back_ios
                </span>
              </p>
              <p className='nxt-btn'>
                <span className='material-symbols-outlined ml24 fs48 fc1'>
                  arrow_forward_ios
                </span>
              </p>
            </div>
          </div>
        </section>
        <section className='choose-us ptb40 pr'>
          <div className='wrapper df ais pt48'>
            <h2 className='section-heading fc2 pb8 pt40 flx1 ps t0'>
              Why choose AAJUX <br />
              as a UI UX design studio?
            </h2>

            <div className='choose-blocks v-center fdc mt40 pt40 flx60'>
              <div className='flx100 aic w100 df mt40 pt40 pb48 jcsb fww'>
                <article className='choose-block transit1 cp flx1 box-center bg6 p32 flx48 br2 mt48'>
                  <div className='choose-links'>
                    <h4 className='fs104 fc4 mb16 mt32'>01</h4>
                    <p className='fs28 lh34 fw5 choose-link-heading'>
                      FASTER GO-TO MARKET
                    </p>
                    <p className='choose-text fs18 lh28 mt16 fc4 dif pb8 pt4 pr8'>
                      Our processes are optimised to meet tight deadlines
                    </p>
                  </div>
                </article>
                <article className='choose-block transit1 cp flx1 box-center bg6 p32 flx48 br2 mb40'>
                  <div className='choose-links'>
                    <h4 className='fs104 fc4 mb16 mt32'>02</h4>
                    <p className='fs28 lh34 fw5 choose-link-heading'>
                      INDUSTRY-WIDE EXPERIENCE
                    </p>
                    <p className='choose-text fs18 lh28 mt16 fc4 dif pb8 pt4 pr8'>
                      We are adept with domain nuances and design with
                      perspective in mind
                    </p>
                  </div>
                </article>
                <article className='choose-block transit1 cp flx1 box-center bg6 p32 flx48 br2 mt48'>
                  <div className='choose-links'>
                    <h4 className='fs104 fc4 mb16 mt32'>03</h4>
                    <p className='fs28 lh34 fw5 choose-link-heading'>
                      FLEXIBLE ENGAGEMENT MODELS
                    </p>
                    <p className='choose-text fs18 lh28 mt16 fc4 dif pb8 pt4 pr8'>
                      We understand that no two working relationships are same
                    </p>
                  </div>
                </article>
                <article className='choose-block transit1 cp flx1 box-center bg6 p32 flx48 br2 mb40'>
                  <div className='choose-links'>
                    <h4 className='fs104 fc4 mb16 mt32'>04</h4>
                    <p className='fs28 lh34 fw5 choose-link-heading'>
                      OMNI-CHANNEL APPROACH
                    </p>
                    <p className='choose-text fs18 lh28 mt16 fc4 dif pb8 pt4 pr8'>
                      Building a unified digital narrative for your brand
                    </p>
                  </div>
                </article>
                <article className='choose-block transit1 cp flx1 box-center bg6 p32 flx48 br2 mt48'>
                  <div className='choose-links'>
                    <h4 className='fs104 fc4 mb16 mt32'>05</h4>
                    <p className='fs28 lh34 fw5 choose-link-heading'>
                      DRIVEN BY RESULTS
                    </p>
                    <p className='choose-text fs18 lh28 mt16 fc4 dif pb8 pt4 pr8'>
                      Balancing your business goals while maintaining user
                      delight
                    </p>
                  </div>
                </article>
                <article className='choose-block transit1 cp flx1 box-center bg6 p32 flx48 br2 mb40'>
                  <div className='choose-links'>
                    <h4 className='fs104 fc4 mb16 mt32'>06</h4>
                    <p className='fs28 lh34 fw5 choose-link-heading'>
                      COMPETITIVE EDGE
                    </p>
                    <p className='choose-text fs18 lh28 mt16 fc4 dif pb8 pt4 pr8'>
                      We design to keep your business ahead of the curve
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
        <section className='speak-us ptb40 pr bg10'>
          <div className='wrapper ptb48 ofh pr'>
            <h2 className='container section-heading fc2 pb8 pt40 wsnw mb48'>
              LET'S TRANSFORM THE FUTURE. &nbsp;LET'S TRANSFORM THE FUTURE.
              &nbsp;LET'S TRANSFORM THE FUTURE. &nbsp;LET'S TRANSFORM THE
              FUTURE. &nbsp;LET'S TRANSFORM THE FUTURE. &nbsp;LET'S TRANSFORM
              THE FUTURE. &nbsp;LET'S TRANSFORM THE FUTURE. &nbsp;
            </h2>

            <div className='speak-blocks v-center fdc mt40 pt40'>
              <p className='speak-text fs22 lh28 tac flx60 pt40'>
                Whatever challenge your organization might face, you don't have
                to solve it alone. Let's talk about the future you're here to
                make—and then let's make it.
              </p>
              <div className='speak-cta h-center mt40'>
                <NavLink to='/' className='fs18 bg9 dif aic pr24 h48 fc1 br2'>
                  <span className='material-symbols-outlined pl24 pr16 mr16 bg4 h48 box-center'>
                    {" "}
                    campaign{" "}
                  </span>
                  Speak to us
                </NavLink>
              </div>
            </div>
          </div>
        </section>
        
      </main>
    </div>
  );
};

export default Home;
