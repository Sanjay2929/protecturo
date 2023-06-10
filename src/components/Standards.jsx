import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import standardsImg from "../assets/img/webp/standardsImg.webp";
import RedButton from "./RedButton";
const Standards = () => {
  return (
    <div>
      <section className="py-5">
        <Container className="pt-2 pb-mg-3 mb-sm-4">
          <Row className="align-items-center justify-content-center">
            <Col lg={6} sm={10} xs={12} data-aos="fade-right">
              <img className="w-100" src={standardsImg} alt="img" />
            </Col>
            <Col lg={6} xs={12}>
              <div className="ps-4 pt-lg-0 pt-4 ">
                <h4
                  className="standards ff_giloybold fw_700 fs_2x4l mb-0 pb-3"
                  data-aos="fade-left"
                  data-aos-delay="200"
                >
                  Our standards
                </h4>
                <h3
                  className="ff_giloymedium fw_700 fs_6x5l clr_whiteE1 letter_N2 lh_115 mb-0 pb-xl-4 pb-2"
                  data-aos="fade-left"
                  data-aos-delay="400"
                >
                  Privacy standards not seen before in telecom
                </h3>
                <p
                  className="ff_giloymedium fw_500 fs_md clr_gray lh_28 pt-2 pb-3 mb-0"
                  data-aos="fade-left"
                  data-aos-delay="600"
                >
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident.
                </p>
                <p
                  className="ff_giloymedium fw_500 fs_md clr_gray lh_28 pb-xl-5 pb-3 mb-xl-2 mb-0"
                  data-aos="fade-left"
                  data-aos-delay="800"
                >
                  Your personal information is 100% safe with us, because we do
                  not require any personal information besides email. Of course
                  no contracts, no credit checks and no fine prints. To protect
                  your privacy online, our data plans come with a Privacy IP
                  address.
                </p>
                <RedButton content="Get started" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Standards;
