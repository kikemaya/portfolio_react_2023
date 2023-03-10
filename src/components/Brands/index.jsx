import React from "react";

// import brands data
import { brands } from "../../data";

const Brands = () => {
  return (
    <section className="min-h-[146px] bg-tertiary flex items-center bg-hero-pattern">
      <div className="container mx-auto flex md:justify-center items-center flex-wrap justify-evenly my-4 md:my-0">
        {brands.map((brand, idx) => {
          return (
            <div key={idx} className="mx-8 my-4 md:my-auto">
              <a href={brand.href} target="_blank">
                <img src={brand.img} alt={brand.alt} className="h-10" />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Brands;
