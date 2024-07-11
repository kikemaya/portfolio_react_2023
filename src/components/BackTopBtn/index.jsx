import React, { useState, useEffect } from "react";

// import link
import { animateScroll as scroll } from "react-scroll";
// import icon
import { ChevronUpIcon } from "@heroicons/react/outline";

const BackTopBtn = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 600 ? setShow(true) : setShow(false);
    });
  }, [show]);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    show && (
      <button
        onClick={() => scrollToTop()}
        className="fixed flex items-center justify-center w-12 h-12 text-white transition-all rounded-full cursor-pointer bg-accent hover:bg-accent-hover right-6 bottom-6 md:right-24 md:bottom-24"
      >
        <ChevronUpIcon className="w-6 h-6" />
      </button>
    )
  );
};

export default BackTopBtn;
