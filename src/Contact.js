import React from "react";

const Contact = () => {
  return (
    <>
      <section>
        <div className="wrapper df jcsb pt48 lh28 ptb100 ">
          <div className="page-intro-heading  flx50">
            <div className="page-intro-heading2 fs18 fw5 pl4 mb16">
              Got something In mind?
            </div>
            <div className="page-intro-heading3 fs48 fw8 lh60 mb24">
              Lets craft brilliance together!
            </div>

            <div className="page-intro-contant lh40 fc11 mb24">
              <span className="fw6">
              Explore the diverse expertise and capabilities we bring to the table, as well as the industries we serve. Discover how our services can drive innovation, streamline processes, and propel organizations towar
              </span>
            </div>
          </div>
          <div>
            <div className="Contact-us fs36 fw6">
              <h1>Contact Us</h1>
            </div>
            <div class="form mt32">
              <form action="#" method="post">
                <div class="df mb16">
                  <div class="df fww mr8">
                    <label class="fw5 mb8" for="">
                      Name
                    </label>
                    <input
                      class="w100 pl12 db h48 br8 brd-b2"
                      type="text"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div class="df fww mr8">
                    <label class="fw5 mb8" for="">
                      Company
                    </label>
                    <input
                      class=" w100 pl12 db h48 br8 brd-b2"
                      type="text"
                      placeholder="Company"
                      required
                    />
                  </div>
                </div>
                <div class="df mb16">
                  <div class="df fww mr8 ">
                    <label class="fw5 mb8" for="">
                      Phone
                    </label>
                    <br />
                    <input
                      class="w100 pl12 db h48 br8 brd-b2"
                      type="text"
                      placeholder="Phone"
                      required
                    />
                  </div>
                  <div class="df fww mr8 flx50">
                    <label class="fw5 mb8" for="">
                      Email
                    </label>
                    <input
                      class="w100 pl12 db h48 br8 brd-b2"
                      type="email"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                </div>
                <div class="df fww mb16">
                  <label class="fw5 mb8" for="">
                    Subject
                  </label>
                  <input
                    class="w100 pl12 mr8 db h48 br8 brd-b2"
                    type="text"
                    placeholder="Subject"
                  />
                </div>
                <div class="df fww pr8 mt16">
                  <label class="fw5 mb8" for="">
                    Message
                  </label>
                  <textarea
                    class="flx100 pl12 pt8 mb8 db h80 br8 brd-b2"
                    name="message"
                    id=""
                    rows="4"
                    placeholder="Write a Message"
                  ></textarea>
                </div>
                <div class="submit-btn h48 brd3 br8 v-center jcc plr24 mt8 cp fc4 bg-grdnt-02 bg-grdnt-h1-01">
                  <button>Submit Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
