import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import RedButton from "./RedButton";
import mobileGlobal from "../assets/img/webp/mobileGlobal.webp";
const GlobalConectivity = () => {
  return (
    <>
      <section className="pt-4 bg_gray12 position-relative z-1">
        <Container className="position-relative py-5 my-1 d-flex flex-column align-items-center">
          <img
            className="position_lg_absolute maxW496 w-50 pe-3 ps-xl-0 start-0 bottom-0"
            src={mobileGlobal}
            alt="app"
          />
          <Row className="py-xxl-5 py-4">
            <Col xxl={4} lg={5}></Col>
            <Col xxl={8} lg={7}>
              <div className="ps_75">
                <h3
                  className="ff_giloymedium fw_700 fs_6x5l clr_whiteE1 letter_N4 lh_115 mb-3"
                  data-aos="fade-left"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="300"
                >
                  {" "}
                  Global IoT connectivity to deploy and scale your solutions
                </h3>
                <p
                  className="fw_500 ff_giloymedium fs_2x2l clr_gray lh_160 pb-xl-5 pb-3 mb_12"
                  data-aos="fade-left"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="600"
                >
                  If you're serious about getting your IoT build off the ground
                  - Protecturo is ready to make it quick, frictionless and
                  smart. Get started today with a free SIM & data, or explore
                  enterprise options with our team of IoT experts.
                </p>
                <RedButton content="Get started" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default GlobalConectivity;
