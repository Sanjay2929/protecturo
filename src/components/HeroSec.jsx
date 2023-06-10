import React from "react";
import NavigationBar from "./NavigationBar";
import { Container } from "react-bootstrap";
const HeroSec = () => {
  return (
    <>
      <header className="d-flex flex-column min-vh-xl-100">
        <NavigationBar />
        <section className="heroBg flex-grow-1 linearShadow pb-5 position-relative">
          <Container className=" d-flex justify-content-center py-sm-5 mt-1 mb-5 z-2">
            <h1 className="max_W1120 ff_giloybold fw_700 fs_8x5l clr_white text-center letter_N3 py-4 my-2 upperRedLine position-relative">
              Cyber safety starts
              <span className="d-lg-block">
                here. For both commercial and personal.
              </span>
            </h1>
          </Container>
        </section>
      </header>
    </>
  );
};

export default HeroSec;
