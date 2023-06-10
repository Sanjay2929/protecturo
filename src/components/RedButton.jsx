import React from 'react'

const RedButton = (props) => {
  return (
    <>
      <button className="ff_montserrat fw_500 d-inline-block fs_sm clr_white navButton rounded-pill border-0">
        {props.content}
      </button>
    </>
  );
}

export default RedButton