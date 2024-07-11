import React from "react";

// import navigation data
import { navigation } from "../../data";

// import Link
import { Link } from "react-scroll";

// import { Link as LinkRouter } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul className="flex space-x-8 capitalize text-[15px]">
        {navigation.map((item, idx) => {
          return (
            <li
              className="text-white cursor-pointer hover:text-accent"
              key={idx}
            >
              <Link
                to={item.href}
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className="transition-all duration-300"
              >
                {item.name}
              </Link>
            </li>
          );
        })}
        {/* <LinkRouter to="/blog">Blog</LinkRouter> */}
      </ul>
    </nav>
  );
};

export default Nav;
