import React from "react";

// import social data
import { social } from "../../data";

// import logo
import Logo from "./../../assets/img/logo.png";

const Footer = () => {
  return (
    <footer className="bg-tertiary bg-hero-pattern py-2">
      <div className="container mx-auto my-6">
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">
          <div className="flex space-x-6 items-center justify-center">
            <div className="mr-4">
              <img src={Logo} alt="" className="h-14" />
            </div>

            {social.map((item, index) => {
              const { href, icon } = item;
              return (
                <a
                  className="text-accent text-base"
                  href={href}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {icon}
                </a>
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
