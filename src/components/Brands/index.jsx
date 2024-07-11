import React from "react";

// import brands data
import { brands } from "../../data";
import { motion } from "framer-motion";

const Brands = () => {
  return (
    <section className="min-h-[146px] bg-tertiary flex items-center bg-hero-pattern">
      <div className="container mx-auto flex md:justify-center items-center flex-wrap justify-evenly my-4 md:my-0">
        {brands.map((brand, idx) => {
          return (
            <motion.div
              key={idx}
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                amount: "all",
              }}
              className="mx-8 my-4 md:my-auto transition-all duration-1000"
            >
              <a href={brand.href} target="_blank" rel="noreferrer">
                <img src={brand.img} alt={brand.alt} className="h-10" />
              </a>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Brands;
