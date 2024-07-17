import React from "react";
import Projects from "../Projects";

const Portfolio = () => {
	return (
		<section id="portfolio" className="section bg-primary bg-hero-pattern">
			<div className="container mx-auto">
				<div className="flex flex-col items-center text-center">
					<h2 className="section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block">
						Some of my personal projects
					</h2>

					<p className="subtitle">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam
						labore nisium illum cupiditate reiciendis a numquam
					</p>
				</div>
				<Projects />
			</div>
		</section>
	);
};

export default Portfolio;
