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
						These projects, though simple, symbolize key moments of growth and
						resilience in my tech career. Each one marks a significant step in
						my professional development.
					</p>
				</div>
				<Projects />
			</div>
		</section>
	);
};

export default Portfolio;
