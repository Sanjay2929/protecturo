import React from 'react'
import { Container } from 'react-bootstrap'

const StayConnected = () => {
  return (
    <div>
      <section className="py-5">
        <Container>
          <div className="bg_red text-center py_68_63 connectImg position-relative overflow-hidden br_18">
            <h2 className="text-center ff_giloymedium fw_700 fs_6x5l clr_white letter_N4 mb-3 lh_115 position-relative z-2">
              Stay connect wherever you go
            </h2>
            <h4 className="text-center ff_giloymedium fw_500 fs_2x2l lh_160 clr_whiteE1 mb-4 pb-2 position-relative z-2">
              Buy an international eSIM card, stay connected wherever you go,
              <span className="d-block">and avoid expensive phone bills.</span>
            </h4>
            <button className="ff_montserrat fw_500 d-inline-block fs_sm clr_white bg-black pad15_31 rounded-pill border-0 position-relative z-2">
              Get started
            </button>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default StayConnected