import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import robot from "../assets/img/webp/robot.webp";
const FaqSection = () => {
  return (
    <>
      <section className="pt-4">
        <Container className="pt-5 mt-2">
          <Row className="align-items-start flex-wrap-reverse justify-content-center">
            <Col xl={7} xxl={6} className="pb-5 position-relative z-2 pt-xl-0 pt-4">
              <h3 className="ourBenfits ff_giloybold fw_700 fs_2x4l mb-0 pb-3">
                FAQs
              </h3>
              <h3 className="ff_giloymedium fw_700 fs_6x5l clr_white letter_N4 lh_115 pb-4 mb-3">
                Some useful answers
              </h3>
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0" className="mb-4" data-aos="fade-right" data-aos-easing="ease-in-back"
     data-aos-delay="100">
                  <Accordion.Header className="ff_giloymedium">
                    what are the main objectives of cyber security?
                  </Accordion.Header>
                  <Accordion.Body className="ff_giloylight">
                    At vero eos et accusamus et iusto odio dign era sue issimos
                    ducimus qui blanditiis praesentium vol uptatum deleniti
                    atque corrupti.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className="mb-4" data-aos="fade-right" data-aos-easing="ease-in-back"
     data-aos-delay="400">
                  <Accordion.Header className="ff_giloymedium">
                    what are the main objectives of cyber security?
                  </Accordion.Header>
                  <Accordion.Body className="ff_giloylight">
                    At vero eos et accusamus et iusto odio dign era sue issimos
                    ducimus qui blanditiis praesentium vol uptatum deleniti
                    atque corrupti.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className="mb-4" data-aos="fade-right" data-aos-easing="ease-in-back"
     data-aos-delay="700">
                  <Accordion.Header className="ff_giloymedium">
                    what are the main objectives of cyber security?
                  </Accordion.Header>
                  <Accordion.Body className="ff_giloylight">
                    At vero eos et accusamus et iusto odio dign era sue issimos
                    ducimus qui blanditiis praesentium vol uptatum deleniti
                    atque corrupti.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className="mb-4" data-aos="fade-right" data-aos-easing="ease-in-back"
     data-aos-delay="1000">
                  <Accordion.Header className="ff_giloymedium">
                    what are the main objectives of cyber security?
                  </Accordion.Header>
                  <Accordion.Body className="ff_giloylight">
                    At vero eos et accusamus et iusto odio dign era sue issimos
                    ducimus qui blanditiis praesentium vol uptatum deleniti
                    atque corrupti.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4" className="mb-4" data-aos="fade-right" data-aos-easing="ease-in-back"
     data-aos-delay="1300">
                  <Accordion.Header className="ff_giloymedium">
                    what are the main objectives of cyber security?
                  </Accordion.Header>
                  <Accordion.Body className="ff_giloylight">
                    At vero eos et accusamus et iusto odio dign era sue issimos
                    ducimus qui blanditiis praesentium vol uptatum deleniti
                    atque corrupti.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <div className="py-xxl-5 py-xl-0 py-lg-4 py-0 mb-5"></div>
            </Col>
            <Col xl={5} xxl={6} md={8} className="robotBG position-relative">
              <img
                className="w-100 ps-xxl-4 px-3 tramsformRight position-relative z-1 
            "
                src={robot}
                alt="img"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default FaqSection;
