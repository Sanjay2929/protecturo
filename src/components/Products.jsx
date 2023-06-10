import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import RedButton from "./RedButton";
import simCard from "../assets/img/webp/simCard.webp";
import eSim from "../assets/img/webp/Esim.webp";
import hotspot from "../assets/img/webp/mobileHotspot.webp";

const Products = () => {
  const mobileProducts = [
    {
      id: 5,
      productImg: simCard,
      heading: "SIM card",
    },
    {
      id: 6,
      productImg: eSim,
      heading: "eSIM",
    },
    {
      id: 7,
      productImg: hotspot,
      heading: "Mobile Wifi Hotspot",
    },
  ];
  return (
    <>
      <section className="productsRedcircle position-relative py-4">
        <Container className="position-relative z-2 py-3">
          <h4
            className="text-center ourBenfits ff_giloybold fw_700 fs_2x4l mb-0"
            data-aos="fade-left"
          >
            Our products
          </h4>
          <h3
            className="text-center ff_giloymedium fw_700 fs_6x5l clr_white letter_N4 lh_115 pt-3 mb-1 maxW787 mx-auto px-md-1"
            data-aos="fade-right"
          >
            Allow us to secure your data with Protecturo’s products
          </h3>
          <Row className=" justify-content-center py-md-5 pt-3">
            {mobileProducts.map((val) => {
              return (
                <Col
                  xxl={3}
                  lg={4}
                  sm={6}
                  className="py-2"
                  data-aos="flip-left"
                >
                  <div className="productBox h-100">
                    <div className="d-flex justify-content-between flex-column align-items-center simCardsBox h-100">
                      <div className="maxW165">
                        <img
                          className="w-100 position-relative"
                          src={val.productImg}
                          alt="sim"
                        />
                      </div>
                      <h4 className="ff_giloymedium fw_600 fs_2x4l clr_whiteA6 letter_N2 mb-3 text-center">
                        {val.heading}
                      </h4>
                      <p className="text-center ff_giloymedium fw_500 fs_sm clr_gray lh_150 pb-4 mb-1">
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis
                      </p>
                      <RedButton content="Learn more" />
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Products;
