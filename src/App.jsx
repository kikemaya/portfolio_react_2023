import React from "react";

import About from "./components/About";
import BackTopBtn from "./components/BackTopBtn";
import Blog from "./components/Blog";
import Brands from "./components/Brands";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Opinions from "./components/Opinions";
// import Portfolio from './components/Portfolio';
import Skills from "./components/Skills";

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
