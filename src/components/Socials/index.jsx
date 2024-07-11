import React from "react";

import { motion } from "framer-motion";

// import icons
import { social } from "../../data";

const Socials = () => {
  return (
    <motion.ul
      initial={{ x: 100 }}
      transition={{ duration: 0.5 }}
      animate={{ x: 0 }}
      className="flex space-x-6"
    >
      {social.map((item, index) => {
        return (
          <motion.li
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center justify-center text-accent"
            key={index}
          >
            <a
              className="text-base"
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          </motion.li>
        );
      })}
    </motion.ul>
  );
};

export default Socials;
