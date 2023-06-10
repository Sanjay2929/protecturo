import React from 'react'
import preloader from "../assets/img/svg/preloader.svg";
const Preloader = () => {
       document.body.classList.add("overflow_hidden");
       setTimeout(() => {
         document.getElementById("none").style.display = "none";
         document.body.classList.remove("overflow_hidden");
       }, 3000);
  return (
    <>
      <section
        className="d_flex justify-content-center align-items-center min-vh-100 w-100 position-fixed top-0 start-0 bg_preloader z_100"
        id="none"
      >
       <img className='w-25 preloaderAni' src={preloader} alt="logo" />
      </section>
    </>
  );
}

export default Preloader