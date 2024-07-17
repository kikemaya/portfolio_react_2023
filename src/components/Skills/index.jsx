import React from "react";

import { motion } from "framer-motion";

// import skill data
import { skills } from "../../data";

const Skills = () => {
	return (
		<section className="py-12 bg-tertiary bg-hero-pattern">
			<div className="container mx-auto">
				<div className="grid grid-cols-8 md:grid-flow-col">
					{skills.map((skill) => {
						return (
							<motion.div
								initial={{
									opacity: 0,
								}}
								whileInView={{
									opacity: 1,
								}}
								viewport={{
									amount: "all",
								}}
								className="flex items-center justify-center transition-all"
								key={skill.id}
							>
								<img className="lg:h-20" src={skill.image} alt="" />
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Skills;
