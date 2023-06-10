import React, { useState } from 'react'
import arrow from "../assets/img/svg/topArrowBtn.png";
const TopBtn = () => {
         const [backTop, setBackTop] = useState(false);
         const moveToTop = () => {
           document.documentElement.scrollTop = 0;
         };
         window.addEventListener("scroll", () => {
           if (document.documentElement.scrollTop > 100) {
             setBackTop(true);
           } else {
             setBackTop(false);
           }
         }); 
  return (
    <>
      {backTop ? (
        <div
          onClick={moveToTop}
          className="TopButton position-fixed d-flex align-items-center justify-content-center rounded-pill gap-2 cursiorPointer"
        >
            <img className='w-50' src={arrow} alt="img" />
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default TopBtn