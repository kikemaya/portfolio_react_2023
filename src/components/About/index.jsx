import React from 'react';
import { Link } from 'react-scroll';

// import img
import Image from './../../assets/img/nhero.jpg';

const About = () => {
  return (
    <section className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
          <img
            className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
            src={Image}
            alt=''
          />
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                Enrique Maya
              </h2>
              <p className='mb-4 text-accent'>
                MMA fan | The funniest amateur poet | Eternal student.
              </p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
                Just another web3 enthusiast. Lover of creating functional and intuitive products that people can enjoy and found actually usefull.
                <br />
                <br />
                I love working as a team. Passionate about sharing knowledge creating real connections with people and reaching ambitious goals together.
                <br />
                <br />
                One of my greatest strengths is public speaking. Verbal expression it's a key in my life.
                <br />
                <br />
                <cite>
                  <small>
                    "Cuando hay una urgencia auténtica de comunicar una experiencia íntima, o nuestra percepción del mundo externo, la voluntad expresiva crea la ordenación de las palabras".
                    <br />
                    <br />
                    - Juan José Arreola.
                  </small>
                </cite>
              </p>
            </div>
            <Link
              className='btn btn-md
              bg-accent hover:bg-secondary-hover
              transition-all cursor-pointer'
              to='contact'
              smooth={true}
              duration={1000}
            >
              Contact me
            </Link>
          </div>
        </div>
      </div>
    </section >
  );
};

export default About;
