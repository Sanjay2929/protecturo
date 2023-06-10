import React, { useState } from "react";
import { Container } from "react-bootstrap";
import siteLogo from "../assets/img/svg/SiteLogo.svg";
import { TbMenu2 } from "react-icons/tb";
import { GiCrossMark } from "react-icons/gi";
import RedButton from "./RedButton";
const NavigationBar = () => {
  const [first, setfirst] = useState(true);
  function showUl() {
    setfirst(!first);
  }
  if (!first) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <nav className="bg_black py-3">
        <Container className="d-flex justify-content-between align-items-center py-4">
          <img
            className="cursiorPointer siteLogo z_51 w-100"
            src={siteLogo}
            alt="logo"
          />
          <ul
            className={
              first
                ? "ps-0 d-flex navbarLinks mb-0 align-items-center flex-column flex-lg-row"
                : "ps-0 d-flex navbarLinks mb-0 align-items-center flex-column flex-lg-row navLeft0"
            }
          >
            <li>
              <p href="#">Benefits</p>
            </li>
            <li>
              <p href="#">Privacy</p>
            </li>
            <li>
              <p href="#">Products</p>
            </li>
            <li>
              <p href="#">App</p>
            </li>
            <li>
              <p href="#">Features</p>
            </li>
            <li>
              <p href="#">FAQs</p>
            </li>
            <li className="ps-3 ms-1">
              <RedButton content="Get started" />
            </li>
          </ul>
          <div onClick={showUl} className="d-lg-none d-block z_51">
            <h1 className="text-white cursiorPointer">
              {first ? <TbMenu2 /> : <GiCrossMark />}
            </h1>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default NavigationBar;
