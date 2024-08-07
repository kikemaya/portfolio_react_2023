import React from "react";

import { motion } from "framer-motion";

// import social data
import { social } from "../../data";

// import logo
import Logo from "./../../assets/img/logo.png";

const Footer = () => {
	return (
		<footer className="py-2 bg-tertiary bg-hero-pattern">
			<div className="container mx-auto my-6">
				<div className="flex flex-col items-center justify-between space-y-6 lg:flex-row lg:space-y-0">
					<div className="flex items-center justify-center space-x-6">
						<div className="mr-4">
							<a href="/">
								<motion.img
									src={Logo}
									alt=""
									whileHover={{
										scale: 1.2,
										rotate: 360,
										transition: { duration: 0.5 },
									}}
									whileTap={{ scale: 0.9 }}
									className="h-14 hover:cursor-pointer"
								/>
							</a>
						</div>

						{social.map((item) => {
							const { href, icon } = item;
							return (
								<motion.a
									whileHover={{ scale: 1.5 }}
									whileTap={{ scale: 0.9 }}
									className="text-lg text-accent"
									href={href}
									key={item.id}
									target="_blank"
									rel="noopener noreferrer"
								>
									{icon}
								</motion.a>
							);
						})}
					</div>

					<p className="text-paragraph opacity-80 text-[15px]">
						&copy; 2024 Enrique Maya. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
