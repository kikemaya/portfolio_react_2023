import React from "react";

import { motion } from "framer-motion";

// import banner image
import ManImg from "./../../assets/img/profile-hero-section.png";

import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-[100vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden bg-hero-pattern"
    >
      <div className="container h-full mx-auto">
        <div className="flex items-center h-full">
          <motion.div
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            className="flex flex-col items-center justify-end flex-1 lg:items-start h-3/4"
          >
            <p className="text-2xl text-accent  mb-[22px]">
              Hey, I am Enrique Maya! 👨🏽‍💻🙌
            </p>
            <h1 className="text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-5xl lg:leading-[1.2] font-bold md:tracking-[-2px] text-center lg:text-left">
              Web Developer
            </h1>
            <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left">
              Also a very proud and happy teacher. I really enjoy connecting
              with people and helping them. So...
            </p>

            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                className="transition-all duration-300 cursor-pointer btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg "
                to="contact"
                smooth={true}
                duration={1500}
              >
                How can I help you?
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            className="items-end justify-end flex-1 hidden h-full lg:flex"
          >
            <img src={ManImg} alt="Enrique Maya" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
