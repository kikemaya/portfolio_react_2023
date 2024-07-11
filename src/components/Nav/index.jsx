import React from "react";

import { motion } from "framer-motion";

// import navigation data
import { navigation } from "../../data";

// import Link
import { Link } from "react-scroll";

// import { Link as LinkRouter } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <motion.ul
        initial={{ y: -100 }}
        transition={{ duration: 0.5 }}
        animate={{ y: 0 }}
        className="flex space-x-8 capitalize text-[15px]"
      >
        {navigation.map((item, idx) => {
          return (
            <motion.li
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
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
            </motion.li>
          );
        })}
        {/* <LinkRouter to="/blog">Blog</LinkRouter> */}
      </motion.ul>
    </nav>
  );
};

export default Nav;
