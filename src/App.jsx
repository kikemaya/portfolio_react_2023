import React from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import About from "./components/About";
// import Portfolio from './components/Portfolio';
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackTopBtn from "./components/BackTopBtn";
import Blog from "./components/Blog";
import Opinions from "./components/Opinions";

const App = () => {
  return (
    <div className="relative bg-white">
      <Header />
      <Hero />
      <Brands />
      <About />
      <Skills />
      <Blog />
      <Opinions />
      {/* <Portfolio /> */}
      <Contact />
      <Footer />
      <BackTopBtn />
    </div>
  );
};

export default App;
