import React from "react";

// import brands data
import { brands } from "../../data";
import { motion } from "framer-motion";

const Brands = () => {
  return (
    <section className="min-h-[146px] bg-tertiary flex items-center bg-hero-pattern">
      <div className="container flex flex-wrap items-center mx-auto my-4 md:justify-center justify-evenly md:my-0">
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
              className="mx-8 my-4 transition-all md:my-auto"
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
