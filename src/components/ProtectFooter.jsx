import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logoFooter from "../assets/img/svg/SiteLogo.svg";
const ProtectFooter = () => {
  return (
    <>
      <section className="pt-sm-4">
        <Container className="py-sm-5 py-4 mt-md-3">
          <Row className="pb-md-5 pb-3 mb-1">
            <Col
              xl={4}
              md={8}
              data-aos="fade-right"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
            >
              <img
                className="maxW250 cursiorPointer"
                src={logoFooter}
                alt="logo"
              />
              <p className="fw_500 ff_giloylight fs_sm clr_gray lh_150 py-3 mt-1 mb-lg-4 mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nis commodo consequat.
              </p>
              <div className="d-flex gap-3 socialIcons">
                <a href="#">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="16" cy="16" r="16" fill="#232323" />
                    <path
                      d="M23.1412 10.0355L20.379 21.1731C20.249 21.6977 19.6478 21.9679 19.1549 21.7189L15.6615 19.9544L14.0096 22.5984C13.5601 23.319 12.4227 23.0064 12.4227 22.1639V19.2179C12.4227 18.9901 12.5202 18.7729 12.6881 18.6139L19.4961 12.2556C19.4907 12.1762 19.4041 12.1073 19.3174 12.1656L11.1932 17.6973L8.46349 16.3196C7.82439 15.9964 7.85147 15.0904 8.51224 14.8095L21.9713 9.07121C22.6158 8.79568 23.3091 9.36263 23.1412 10.0355Z"
                      fill="#AB1D1D"
                    />
                  </svg>
                </a>
                <a href="#">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="16" cy="16" r="16" fill="#232323" />
                    <path
                      d="M18.3319 11.3246H19.61V9.09858C19.3895 9.06825 18.6311 9 17.748 9C15.9052 9 14.6429 10.1591 14.6429 12.2894V14.25H12.6094V16.7385H14.6429V23H17.136V16.7391H19.0873L19.397 14.2506H17.1355V12.5362C17.136 11.8169 17.3297 11.3246 18.3319 11.3246Z"
                      fill="#AB1D1D"
                    />
                  </svg>
                </a>
                <a href="#">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="16" cy="16" r="16" fill="#232323" />
                    <g clip-path="url(#clip0_64_6167)">
                      <path
                        d="M22.9851 13.116C22.9523 12.3722 22.832 11.8608 22.6597 11.4176C22.4819 10.9472 22.2085 10.5261 21.8501 10.176C21.5001 9.82047 21.0761 9.5442 20.6112 9.36921C20.1655 9.19689 19.6568 9.0766 18.9129 9.0438C18.1635 9.00823 17.9256 9 16.0248 9C14.124 9 13.8861 9.00823 13.1395 9.04102C12.3956 9.07382 11.8842 9.19422 11.4412 9.36644C10.9707 9.5442 10.5495 9.8177 10.1994 10.176C9.84391 10.5261 9.56775 10.95 9.39265 11.4149C9.22033 11.8608 9.10004 12.3694 9.06724 13.1133C9.03166 13.8627 9.02344 14.1006 9.02344 16.0014C9.02344 17.9021 9.03166 18.14 9.06446 18.8867C9.09726 19.6306 9.21766 20.142 9.38998 20.5851C9.56775 21.0555 9.84391 21.4766 10.1994 21.8267C10.5495 22.1823 10.9734 22.4585 11.4384 22.6335C11.8842 22.8058 12.3928 22.9261 13.1368 22.9589C13.8833 22.9918 14.1214 23 16.0221 23C17.9229 23 18.1608 22.9918 18.9074 22.9589C19.6513 22.9261 20.1627 22.8058 20.6058 22.6335C21.5466 22.2698 22.2905 21.5259 22.6543 20.5851C22.8265 20.1393 22.9469 19.6306 22.9797 18.8867C23.0125 18.14 23.0207 17.9021 23.0207 16.0014C23.0207 14.1006 23.0179 13.8627 22.9851 13.116ZM21.7244 18.832C21.6943 19.5157 21.5794 19.8849 21.4837 20.1311C21.2485 20.741 20.7644 21.225 20.1545 21.4603C19.9084 21.556 19.5365 21.6709 18.8554 21.7009C18.117 21.7338 17.8955 21.7419 16.0276 21.7419C14.1596 21.7419 13.9354 21.7338 13.1996 21.7009C12.5159 21.6709 12.1467 21.556 11.9005 21.4603C11.597 21.3481 11.3208 21.1703 11.0965 20.9379C10.8641 20.7109 10.6863 20.4374 10.5741 20.1339C10.4784 19.8877 10.3635 19.5157 10.3335 18.8348C10.3006 18.0964 10.2925 17.8748 10.2925 16.0068C10.2925 14.1389 10.3006 13.9146 10.3335 13.179C10.3635 12.4952 10.4784 12.126 10.5741 11.8799C10.6863 11.5763 10.8641 11.3001 11.0993 11.0758C11.3262 10.8433 11.5997 10.6655 11.9033 10.5534C12.1495 10.4577 12.5214 10.3429 13.2024 10.3128C13.9408 10.28 14.1624 10.2717 16.0302 10.2717C17.901 10.2717 18.1224 10.28 18.8582 10.3128C19.5419 10.3429 19.9111 10.4577 20.1573 10.5534C20.4608 10.6655 20.7371 10.8433 20.9613 11.0758C21.1938 11.3028 21.3715 11.5763 21.4837 11.8799C21.5794 12.126 21.6943 12.4979 21.7244 13.179C21.7572 13.9174 21.7654 14.1389 21.7654 16.0068C21.7654 17.8748 21.7572 18.0936 21.7244 18.832Z"
                        fill="#AB1D1D"
                      />
                      <path
                        d="M16.0261 12.4053C14.0406 12.4053 12.4297 14.0161 12.4297 16.0017C12.4297 17.9873 14.0406 19.5981 16.0261 19.5981C18.0117 19.5981 19.6225 17.9873 19.6225 16.0017C19.6225 14.0161 18.0117 12.4053 16.0261 12.4053ZM16.0261 18.3346C14.738 18.3346 13.6932 17.2899 13.6932 16.0017C13.6932 14.7135 14.738 13.6688 16.0261 13.6688C17.3143 13.6688 18.359 14.7135 18.359 16.0017C18.359 17.2899 17.3143 18.3346 16.0261 18.3346Z"
                        fill="#AB1D1D"
                      />
                      <path
                        d="M20.6051 12.2624C20.6051 12.7261 20.2291 13.102 19.7654 13.102C19.3017 13.102 18.9258 12.7261 18.9258 12.2624C18.9258 11.7987 19.3017 11.4229 19.7654 11.4229C20.2291 11.4229 20.6051 11.7987 20.6051 12.2624Z"
                        fill="#AB1D1D"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_64_6167">
                        <rect
                          width="14"
                          height="14"
                          fill="white"
                          transform="translate(9 9)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a href="#">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="16" cy="16" r="16" fill="#232323" />
                    <g clip-path="url(#clip0_64_6173)">
                      <path
                        d="M23 11.6591C22.4794 11.8875 21.9246 12.0389 21.3462 12.1124C21.9412 11.7571 22.3954 11.1989 22.6089 10.526C22.0541 10.8567 21.4416 11.0904 20.7889 11.2208C20.2621 10.6599 19.5114 10.3125 18.6924 10.3125C17.1034 10.3125 15.8241 11.6023 15.8241 13.1834C15.8241 13.4109 15.8434 13.6296 15.8906 13.8379C13.5045 13.7215 11.3931 12.5779 9.97475 10.8358C9.72712 11.2654 9.58188 11.7571 9.58188 12.2865C9.58188 13.2805 10.0938 14.1616 10.8568 14.6718C10.3956 14.663 9.94325 14.5291 9.56 14.3183C9.56 14.327 9.56 14.3384 9.56 14.3498C9.56 15.7445 10.5549 16.903 11.8595 17.1699C11.6259 17.2337 11.3712 17.2644 11.107 17.2644C10.9232 17.2644 10.7377 17.2539 10.5636 17.2154C10.9355 18.352 11.9908 19.1876 13.2455 19.2148C12.269 19.9786 11.0291 20.4389 9.68688 20.4389C9.4515 20.4389 9.22575 20.4284 9 20.3995C10.2714 21.2194 11.7781 21.6875 13.403 21.6875C18.6845 21.6875 21.572 17.3125 21.572 13.5202C21.572 13.3934 21.5676 13.2709 21.5615 13.1493C22.1311 12.745 22.6097 12.2401 23 11.6591Z"
                        fill="#AB1D1D"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_64_6173">
                        <rect
                          width="14"
                          height="14"
                          fill="white"
                          transform="translate(9 9)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </div>
            </Col>
            <Col xl={8} xs={12}>
              <Row>
                <Col
                  md={3}
                  xs={6}
                  className="pt-xl-0 pt-4"
                  data-aos="fade-right"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="600"
                >
                  <div className="ps-xl-4">
                    <h3 className="fw_700 ff_giloymedium fs_2x4l clr_white letter_N2 mb-3">
                      Products
                    </h3>
                    <ul className="ps-0 footerLinks">
                      <li>
                        <p href="#">eSIM</p>
                      </li>
                      <li>
                        <p href="#">SIM Card</p>
                      </li>
                      <li>
                        <p href="#">Wifi HotSopt</p>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col
                  md={3}
                  xs={6}
                  className="pt-xl-0 pt-4"
                  data-aos="fade-right"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="900"
                >
                  <h3 className="fw_700 ff_giloymedium fs_2x4l clr_white letter_N2 mb-3">
                    Company
                  </h3>
                  <ul className="ps-0 footerLinks">
                    <li>
                      <p href="#">About </p>
                    </li>
                    <li>
                      <p href="#">Careers</p>
                    </li>
                    <li>
                      <p href="#">Ventures</p>
                    </li>
                    <li>
                      <p href="#">Grants</p>
                    </li>
                    <li>
                      <p href="#">Docs</p>
                    </li>
                  </ul>
                </Col>
                <Col
                  md={3}
                  xs={6}
                  className="pt-xl-0 pt-4"
                  data-aos="fade-right"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="1200"
                >
                  <h3 className="fw_700 ff_giloymedium fs_2x4l clr_white letter_N2 mb-3">
                    Resources
                  </h3>
                  <ul className="ps-0 footerLinks">
                    <li>
                      <p href="#">Support Center</p>
                    </li>
                    <li>
                      <p href="#">FAQs</p>
                    </li>
                    <li>
                      <p href="#">Partners</p>
                    </li>
                    <li>
                      <p href="#">Blogs</p>
                    </li>
                    <li>
                      <p href="#">Updates & News</p>
                    </li>
                  </ul>
                </Col>
                <Col
                  md={3}
                  xs={6}
                  className="pt-xl-0 pt-4"
                  data-aos="fade-right"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="1500"
                >
                  <h3 className="fw_700 ff_giloymedium fs_2x4l clr_white letter_N2 mb-3">
                    My Account
                  </h3>
                  <ul className="ps-0 footerLinks">
                    <li>
                      <p href="#">Profile </p>
                    </li>
                    <li>
                      <p href="#">Favorites</p>
                    </li>
                    <li>
                      <p href="#">Watchlist</p>
                    </li>
                    <li>
                      <p href="#">My Collections</p>
                    </li>
                    <li>
                      <p href="#">Settings</p>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
          <div className="d-flex justify-content-between align-items-center pb-3 flex-sm-row flex-column">
            <h4 className="mb-0 ff_giloymedium fw_500 fs_sm lh_150 clr_gray cursiorPointer">
              © 2022 Protecturo, All rights
            </h4>
            <h4 className="mb-0 ff_giloymedium fw_500 fs_sm lh_150 clr_gray pt-2 pt-sm-0 cursiorPointer">
              Privacy Policy • Terms & Conditions
            </h4>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ProtectFooter;
