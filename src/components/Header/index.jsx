import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";
// import components
import Logo from "./../../assets/img/logo.png";
import Nav from "../Nav";
import NavMobile from "../Nav/NavMobile";
import Socials from "../Socials";

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${
        bg ? "bg-tertiary h-20 bg-hero-pattern" : "h-24"
      } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}
    >
      <div className="container flex items-center justify-between h-full mx-auto">
        <a href="/">
          <motion.img
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            whileHover={{
              scale: 1.2,
              rotate: 360,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
            src={Logo}
            alt="logo"
            className="h-14 hover:cursor-pointer"
          />
        </a>

        {/* nav */}
        <div className="hidden lg:block">
          <Nav />
        </div>
        {/* Socials */}
        <div className="hidden lg:block">
          <Socials />
        </div>
        {/* nav mobile*/}
        <div className="lg:hidden">
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
