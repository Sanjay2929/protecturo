import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import googlePlay from "../assets/img/webp/googlePlay.webp";
import appStore from "../assets/img/webp/appStore.webp";
import mobileApp from "../assets/img/webp/InstantConnectivity.webp";
const ProtexturoApp = () => {
  return (
    <div>
      <section className="py-md-5">
        <Container className="py-5 mt-sm-5">
          <Row className="instantConect position-relative flex-wrap-reverse justify-content-center">
            <Col
              lg={7}
              xs={12}
              className="pe-lg-5 position-relative z-2"
              data-aos="fade-right"
            >
              <h2 className="ff_giloymedium fw_700 fs_6x5l clr_whiteE1 letter_N4 pb_20">
                Instant connectivity with the Protecturo app
              </h2>
              <p className="ff_giloymedium fw_500 fs_2x2l clr_gray lh_160 pb-4 mb-3">
                The ideal for the 21st century roadwarrior. The Protecturo app
                lets you to grab a single data plan where and when you want - at
                home or in any of our 190+ destinations. Select a plan from the
                app, download an{" "}
                <span className="standards fw_700 ff_giloybold">eSIM</span>, and
                you'll connect on the spot, on physical SIM card required.
              </p>
              <div className="d-flex gap_20 flex-sm-row">
                <img
                  className="maxW_sm_194 max_w100 w-100 cursiorPointer"
                  src={googlePlay}
                  alt="img"
                />
                <img
                  className="maxW_sm_194 max_w100 w-100 cursiorPointer"
                  src={appStore}
                  alt="img"
                />
              </div>
            </Col>
            <Col
              lg={5}
              xs={12}
              className="d-flex justify-content-center"
              data-aos="fade-left"
            >
              <img
                className="w-100 mobileApp d-block d-lg-none "
                src={mobileApp}
                alt="img"
              />
            </Col>
            <img
              className="position-absolute bottom-0 w-100 mobileApp z-0 d-lg-block d-none"
              src={mobileApp}
              alt="img"
            />
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default ProtexturoApp;
