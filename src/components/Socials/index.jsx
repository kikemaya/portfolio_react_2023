import React from "react";

import { motion } from "framer-motion";

// import icons
import { social } from "../../data";

const Socials = () => {
	return (
		<motion.ul
			initial={{ x: 100 }}
			animate={{ x: 0 }}
			className="flex space-x-6"
		>
			{social.map((item) => {
				return (
					<motion.li
						whileHover={{ scale: 1.5 }}
						whileTap={{ scale: 0.9 }}
						className="flex items-center justify-center text-accent"
						key={item.id}
					>
						<a
							className="text-lg"
							href={item.href}
							target="_blank"
							rel="noopener noreferrer"
						>
							{item.icon}
						</a>
					</motion.li>
				);
			})}
		</motion.ul>
	);
};

export default Socials;
