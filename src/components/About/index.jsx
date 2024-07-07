import React from "react";
import { Link } from "react-scroll";

// import img
import Image from "./../../assets/img/nhero.jpg";

const About = () => {
  return (
    <section className="section bg-secondary bg-hero-pattern" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
            src={Image}
            alt=""
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                Enrique Maya
              </h2>
              <p className="mb-4 text-accent">
                MMA Fan 🥊| Investments Enthusiast 📈 | Eternal Student 🧑🏽‍💻
              </p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
              Passionate web developer dedicated to crafting beautiful and functional websites. PC building enthusiast and a strong team player.  
                <br />
                <br />
                I enjoy spending my downtime with my family, running, engaging in contact sports, and pursuing lifelong learning.
                <br />
                <br />
                One of my greatest strengths is public speaking. Verbal
                expression it's a key in my life.
                <br />
                <br />
                <cite>
                  <small>
                    "Cuando hay una urgencia auténtica de comunicar una
                    experiencia íntima, o nuestra percepción del mundo externo,
                    la voluntad expresiva crea la ordenación de las palabras".
                    <br />
                    <br />- Juan José Arreola.
                  </small>
                </cite>
              </p>
            </div>
            <Link
              className="btn btn-md
              bg-accent hover:bg-secondary-hover
              transition-all cursor-pointer"
              to="contact"
              smooth={true}
              duration={1000}
            >
              Contact me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
