import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import mobile from "../assets/img/svg/mobEarth.svg";
import DataPlan from "../assets/img/svg/dataPlans.svg";
import EaseToGet from "../assets/img/svg/easeToget.svg";
import telephone from "../assets/img/svg/telephoneEarth.svg";
import redEarth from "../assets/img/webp/earthRed.webp";
const ProductBenefits = () => {
  return (
    <div>
      <section className="pt-2">
        <Container className="py-5 ">
          <Row className=" flex-wrap-reverse">
            <Col lg={6} xs={12} className="pt-4 pt-lg-0">
              <h4 className="ourBenfits ff_giloybold fw_700 fs_2x4l mb-0 pb-3">
                Our product benefits
              </h4>
              <h3 className="ff_giloymedium fw_700 fs_6x5l clr_white letter_N4 lh_115 pb-3">
                What you will{" "}
                <span className="d-lg-block">get with Protecturo</span>
              </h3>
              <p className="ff_giloylight fw_500 fs_2x2l clr_gray lh_160 pe-xl-4 mb-2 pb-xxl-4">
                Your creativity is endless. Your IoT project shouldn't be held
                back by cellular connectivity. Let's build a new unicorn
                together.
              </p>
              <Row className="justify-content-between py-1">
                <Col
                  xxl={5}
                  sm={6}
                  className="py-xxl-4 py-2 mb-2"
                  data-aos="fade-right"
                  data-aos-offset="200"
                >
                  <img className="maxW65" src={mobile} alt="img" />
                  <h3 className="fw_600 ff_giloymedium fs_2x4l clr_whiteE1 lh_150 letter_N2 pt-xl-4 pt-2 pb-2 mb-0">
                    Stay connected
                  </h3>
                  <p className="fw_500 ff_giloymedium fw_sm clr_gray lh_150 mb-0">
                    Travel and stay connected without roaming or surprise bills.
                  </p>
                </Col>
                <Col
                  xxl={5}
                  sm={6}
                  className="py-xxl-4 py-2 mb-2"
                  data-aos="fade-right"
                  data-aos-offset="400"
                >
                  <img className="maxW65" src={telephone} alt="img" />
                  <h3 className="fw_600 ff_giloymedium fs_2x4l clr_whiteE1 lh_150 letter_N2 pt-xl-4 pt-2 pb-2 mb-0">
                    International
                  </h3>
                  <p className="fw_500 ff_giloymedium fw_sm clr_gray lh_150 mb-0">
                    Keep your local SIM card to receive all phone calls
                    everywhere.
                  </p>
                </Col>
                <Col
                  xxl={5}
                  sm={6}
                  className="py-xxl-4 py-2 mb-2"
                  data-aos="fade-right"
                  data-aos-offset="600"
                >
                  <img className="maxW65" src={EaseToGet} alt="img" />
                  <h3 className="fw_600 ff_giloymedium fs_2x4l clr_whiteE1 lh_150 letter_N2 pt-xl-4 pt-2 pb-2 mb-0">
                    Ease to get
                  </h3>
                  <p className="fw_500 ff_giloymedium fw_sm clr_gray lh_150 mb-0">
                    Purchase and install your eSIM in just one minute.
                  </p>
                </Col>
                <Col
                  xxl={5}
                  sm={6}
                  className="pe-lg-0 py-xxl-4 py-2 mb-2"
                  data-aos="fade-right"
                  data-aos-offset="800"
                >
                  <img className="maxW65" src={DataPlan} alt="img" />
                  <h3 className="fw_600 ff_giloymedium fs_2x4l clr_whiteE1 lh_150 letter_N2 pt-xl-4 pt-2 pb-2 mb-0">
                    Data plans
                  </h3>
                  <p className="fw_500 ff_giloymedium fw_sm clr_gray lh_150 mb-0">
                    Get unlimited data plans in according to destinations.
                  </p>
                </Col>
              </Row>
            </Col>
            <Col lg={6} sm={10} xs={12} className="object-fit-cover">
              <img className="w-100 h-100" src={redEarth} alt="earth" />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default ProductBenefits