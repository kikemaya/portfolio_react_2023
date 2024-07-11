import React from "react";

import { motion } from "framer-motion";

// import social data
import { social } from "../../data";

// import logo
import Logo from "./../../assets/img/logo.png";

const Footer = () => {
  return (
    <footer className="py-2 bg-tertiary bg-hero-pattern">
      <div className="container mx-auto my-6">
        <div className="flex flex-col items-center justify-between space-y-6 lg:flex-row lg:space-y-0">
          <div className="flex items-center justify-center space-x-6">
            <div className="mr-4">
              <img src={Logo} alt="" className="h-14" />
            </div>

            {social.map((item, index) => {
              const { href, icon } = item;
              return (
                <motion.a
                  whileHover={{ scale: 1.5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-base text-accent"
                  href={href}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {icon}
                </motion.a>
              );
            })}
          </div>

          <p className="text-paragraph opacity-80 text-[15px]">
            &copy; 2023 Enrique Maya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
