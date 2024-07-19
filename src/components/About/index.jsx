import React, { useRef } from "react";
import { Link } from "react-scroll";

import { motion, useScroll, useTransform } from "framer-motion";

// import img
import Image from "./../../assets/img/nhero.jpg";

const About = () => {
	const ref = useRef(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0 1", "1.33 1"],
	});

	const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
	const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

	return (
		<section className="bg-secondary section bg-hero-pattern" id="about">
			<motion.div
				ref={ref}
				style={{
					scale: scaleProgress,
					opacity: opacityProgress,
				}}
				className="container mx-auto"
			>
				<div className="flex flex-col gap-24 xl:flex-row">
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
								I am a passionate web developer dedicated to crafting beautiful
								and functional websites. As a PC building enthusiast and a
								strong team player, I thrive on collaboration and innovation.
								<br />
								<br />
								In my downtime, I love spending time with my family, running,
								engaging in contact sports, and embracing lifelong learning.
								<br />
								<br />
								Public speaking is one of my greatest strengths, as verbal
								expression is a vital part of my life.
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
						<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
							<Link
								className="transition-all cursor-pointer btn btn-md bg-accent hover:bg-secondary-hover"
								to="contact"
								smooth={true}
								duration={1500}
							>
								Contact me
							</Link>
						</motion.div>
					</div>
				</div>
			</motion.div>
		</section>
	);
};

export default About;
