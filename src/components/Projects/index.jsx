import React, { useState, useEffect, useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";

// import data
import { projectsData } from "../../data";

// import components
import Project from "./Project";

const Projects = () => {
	const [projects, setProjects] = useState([]);

	const ref = useRef(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0 1", "1.33 1"],
	});

	const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
	const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

	useEffect(() => {
		// get projects based on item
		setProjects(projectsData);
	}, []);

	return (
		<motion.div
			ref={ref}
			style={{
				scale: scaleProgress,
				opacity: opacityProgress,
			}}
		>
			{/* projects nav */}
			<nav className="max-w-xl mx-auto mb-6">
				<ul className="flex flex-col items-center text-white md:flex-row justify-evenly" />
			</nav>
			{/* projects */}
			<section className="grid gap-y-12 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8">
				{projects.map((item) => {
					return (
						<a href={item.href} key={item.id} target="_blank" rel="noreferrer">
							<Project item={item} />
						</a>
					);
				})}
			</section>
		</motion.div>
	);
};

export default Projects;
