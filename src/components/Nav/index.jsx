import React from "react";

import { motion } from "framer-motion";

// import navigation data
import { navigation } from "../../data";

// import Link
import { Link } from "react-scroll";

const Nav = () => {
	return (
		<nav>
			<motion.ul
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				className="flex space-x-8 capitalize text-[15px]"
			>
				{navigation.map((item) => {
					return (
						<motion.li
							whileHover={{ scale: 1.3 }}
							whileTap={{ scale: 0.9 }}
							className="text-white cursor-pointer hover:text-accent"
							key={item.id}
						>
							<Link
								to={item.href}
								activeClass="active"
								spy={true}
								smooth={true}
								duration={500}
								offset={-70}
								className="transition-all duration-300"
							>
								{item.name}
							</Link>
						</motion.li>
					);
				})}
				{/* <LinkRouter to="/blog">Blog</LinkRouter> */}
			</motion.ul>
		</nav>
	);
};

export default Nav;
