import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import cart from "../assets/img/svg/shopping_cart.svg";
import mobileEsim from "../assets/img/svg/settings_cell.svg";
import installQR from "../assets/img/svg/installOR.svg";
const HowEsimWorks = () => {
  return (
    <>
      <section className="py-5">
        <Container className="py-3">
          <h4 className="text-center ourBenfits ff_giloybold fw_700 fs_2x4l mb-0">
            How it works
          </h4>
          <h3 className="text-center ff_giloymedium fw_700 fs_6x5l clr_white letter_N4 lh_115 pt-3 mb-1 maxW787 mx-auto px-md-1 pb-md-5">
            Learn how does international eSIM work
          </h3>
          <Row className="justify-content-center pt-3">
            <Col
              md={4}
              xxl={3}
              className="d-flex flex-column justify-content-center align-items-center pt-md-5"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <div className="pt-md-3 pt-4 ">
                <img src={mobileEsim} alt="img" />
              </div>
              <h3 className="fw_700 ff_giloymedium fs_3x6l clr_whiteE1 letter_N2 pt-3 text-center">
                Check
              </h3>
              <p className="fw_500 fs_sm ff_giloymedium clr_gray text-center maxW195 mb-0">
                that your smartphone supports eSIM
              </p>
            </Col>
            <Col
              md={4}
              xxl={3}
              className="d-flex flex-column justify-content-center align-items-center pb-md-5 mb-3 buyingideline position-relative pt-4 pt-md-0"
            >
              <img src={cart} alt="img" />
              <h3 className="fw_700 ff_giloymedium fs_3x6l clr_whiteE1 letter_N2 pt-3 text-center">
                Buy
              </h3>
              <p className="fw_500 fs_sm ff_giloymedium clr_gray text-center maxW195 mb-0">
                Your eSIM card to travel
              </p>
            </Col>
            <Col
              md={4}
              xxl={3}
              className="d-flex flex-column justify-content-center align-items-center pt-md-5"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <div className="pt-md-3 pt-4 ">
                <img src={installQR} alt="img" />
              </div>
              <h3 className="fw_700 ff_giloymedium fs_3x6l clr_whiteE1 letter_N2 pt-3 text-center">
                Install the QR
              </h3>
              <p className="fw_500 fs_sm ff_giloymedium clr_gray text-center maxW195 mb-0">
                and configure it. Activate it just before your leave
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HowEsimWorks;
