import React from "react";

// import banner image
import ManImg from "./../../assets/img/banner-man2.png";

import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="home"
      className="lg:h-[100vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full">
          <div className="flex-1 flex flex-col items-center lg:items-start h-3/4 justify-end">
            <p className="text-2xl text-accent  mb-[22px]">
              Hey, I'm Enrique! 🙌
            </p>
            <h1 className="text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-5xl lg:leading-[1.2] font-bold md:tracking-[-2px] text-center lg:text-left">
              Frontend
              <br /> Web Developer.
            </h1>
            <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left">
              Also a very proud and a happy teacher. I really enjoy to connect
              with people and help them. So...
            </p>
            <Link
              className="btn btn-md
            bg-accent hover:bg-secondary-hover
            md:btn-lg transition-all duration-300
            cursor-pointer
            "
              to="contact"
              smooth={true}
              duration={1500}
            >
              How can i help you?
            </Link>
          </div>
          <div className="hidden lg:flex flex-1 justify-end items-end h-full">
            <img src={ManImg} alt="Enrique Maya" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
