import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import mobile from "../assets/img/svg/dataPlans.svg";
import EaseToGet from "../assets/img/svg/easeToget.svg";
import telephone from "../assets/img/svg/telephoneEarth.svg";
import featuresImg from "../assets/img/svg/mobEarth.svg";
const Features = () => {
     const featuresapp = [
       {
         id: 5,
         featuresImg: featuresImg,
         features: "Protect your data",
         data: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea",
       },
       {
         id: 6,
         featuresImg: telephone,
         features: "Detect Incidents",
         data: "At vero eos et accusamus et iusto odio dign era sue issimos ducimus qui blanditiis praesentium vol uptatum deleniti atque corrupti.",
       },
       {
         id: 7,
         featuresImg: EaseToGet,
         features: "Security shield",
         data: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea",
       },
       {
         id: 8,
         featuresImg: mobile,
         features: "Unlimited data",
         data: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea",
       },
       {
         id: 9,
         featuresImg: EaseToGet,
         features: "Security shield",
         data: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea",
       },
       {
         id: 10,
         featuresImg: mobile,
         features: "Unlimited data",
         data: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea",
       },
       {
         id: 11,
         featuresImg: featuresImg,
         features: "Protect your data",
         data: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea",
       },
       {
         id: 12,
         featuresImg: telephone,
         features: "Detect Incidents",
         data: "At vero eos et accusamus et iusto odio dign era sue issimos ducimus qui blanditiis praesentium vol uptatum deleniti atque corrupti.",
       },
     ];
  return (
    <div>
      <section>
        <Container className="py-5">
          <h4 className="text-center ourBenfits ff_giloybold fw_700 fs_2x4l mb-0">
            Features
          </h4>
          <h3 className="text-center ff_giloymedium fw_700 fs_6x5l clr_white letter_N4 lh_115 pt-3 pb-4 mb-0 maxW893 mx-auto">
            Best-in-class Cyber safety for commercial and personal.
          </h3>
          <Row className="featuresRedLight position-relative">
            {featuresapp.map((val) => {
              return (
                <Col
                  xl={3}
                  lg={4}
                  sm={6}
                  className="p_15 position-relative z-2"
                  data-aos="flip-left"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="600"
                >
                  <div className="productBox borderRadious0 h-100">
                    <div className="py-md-5 py-4 px_42 px-3 featuresCards h-100 cursiorPointer">
                      <img src={val.featuresImg} alt="img" />
                      <h3 className="pt-4 mt-3 mb-2 ff_giloymedium fw_600 fs_2x4l clr_whiteA6 letter_N2">
                        {val.features}
                      </h3>
                      <p className="mb-0 ff_giloymedium fw_500 fs_sm clr_gray lh_160">
                        {val.data}
                      </p>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Features;
