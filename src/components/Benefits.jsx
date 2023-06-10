import React from "react";
import { Container } from "react-bootstrap";
import getStartedimg from "../assets/img/webp/getStart.webp";
import scaleIndinitely from "../assets/img/webp/scaleIndinitely.webp";
import globalSolution from "../assets/img/webp/globalSolution.webp";
import manageConnectivity from "../assets/img/webp/manageConnectivity.webp";
import Slider from "react-slick";
const Benefits = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          //  centerMode: true,
          //  centerPadding: "11%",
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          centerMode: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
            infinite: true,
          dots:true,
        },
      },
    ],
  };
  const firstSlider = [
    {
      id: 1,
      sliderImg: getStartedimg,
      heading: "Get started with IoT",
      data: "Our experts helps you find the most suitable carrier profile for your deployment.",
    },
    {
      id: 2,
      sliderImg: manageConnectivity,
      heading: "Manage connectivity",
      data: "Control all of your IoT SIM cards on a single platform.",
    },
    {
      id: 3,
      sliderImg: globalSolution,
      heading: "One global solution",
      data: "You will receive 1 invoice and have a single point of contact for support no matter where the SIMs are deployed.",
    },
    {
      id: 4,
      sliderImg: scaleIndinitely,
      heading: "Scale infinitely with ease",
      data: "Reach all business goals with a single connectivity partner.",
    },
  ];
  return (
    <div>
      <section className="pb-4">
        <Container className="py-5">
          <div className="maxW787 mx-auto">
            <h3 className="text-center ourBenfits ff_giloybold fw_700 fs_2x4l mb-0">
              Our benefits
            </h3>
            <h2 className="text-center ff_giloymedium fw_700 fs_6x5l clr_white letter_N4 lh_115 py-3 mb-1">
              Take control of
              <span className="d-lg-block">your cellular connectivity</span>
            </h2>
            <p className="text-center ff_giloylight fw_500 fs_2x2l clr_gray mb-2 pb-4">
              Your creativity is endless. Your IoT project shouldn't be held
              back by cellular connectivity. Let's build a new unicorn together.
            </p>
          </div>
          <Slider {...settings}>
            {firstSlider.map((val) => {
              return (
                <div
                  className="d-flex justify-content-between flex-column align-items-center benefitSliderCard h-100 sliderCards mx_12 cursiorPointer"
                  data-aos="flip-left"
                >
                  <div className="d-flex flex-column align-items-center h-100">
                    <img className="max_w186" src={val.sliderImg} alt="img" />
                    <h2 className="ff_giloymedium fw_600 fs_2x4l letter_N2 text-center clr_white pt-2">
                      {val.heading}
                    </h2>
                    <p className="text-center ff_giloylight fw_500 fs_sm clr_gray pb_30 pt_10">
                      {val.data}
                    </p>
                  </div>
                  <span className="redLineSlider"></span>
                </div>
              );
            })}
          </Slider>
        </Container>
      </section>
    </div>
  );
};

export default Benefits;
