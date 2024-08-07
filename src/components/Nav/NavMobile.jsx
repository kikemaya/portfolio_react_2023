import React, { useState } from "react";

// import icons
import { XIcon } from "@heroicons/react/outline";
import { MenuAlt3Icon } from "@heroicons/react/outline";

// import navigation data
import { navigation } from "../../data";

// import components
import Socials from "../Socials";

// import framer
import { motion } from "framer-motion";

// import Link
import { Link } from "react-scroll";

// import { Link as LinkRouter } from "react-router-dom";

const NavMobile = () => {
	const [isOpen, setIsOpen] = useState(false);

	const circleVariants = {
		hidden: {
			scale: 0,
		},
		visible: {
			scale: 180,
			transition: {
				type: "spring",
				stiffness: 160,
				damping: 60,
			},
		},
	};

	const ulVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				delay: 0.1,
			},
		},
	};

	return (
		<nav className="relative">
			<motion.div
				initial={{ x: 100 }}
				animate={{ x: 0 }}
				onClick={() => setIsOpen(true)}
				className="text-white cursor-pointer"
			>
				<MenuAlt3Icon className="w-8 h-8" />
			</motion.div>

			{/* circle */}
			<motion.div
				variants={circleVariants}
				initial="hidden"
				transition={{ duration: 0.4 }}
				animate={isOpen ? "visible" : "hidden"}
				className="fixed top-0 right-0 w-4 h-4 rounded-full bg-primary bg-hero-pattern"
			/>

			<motion.ul
				variants={ulVariants}
				initial="hidden"
				animate={isOpen ? "visible" : ""}
				className={`${
					isOpen ? "right-0" : "-right-full"
				} fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden`}
			>
				<div
					onClick={() => setIsOpen(false)}
					className="absolute cursor-pointer top-8 right-8"
				>
					<XIcon className="w-8 h-8" />
				</div>
				{navigation.map((item) => {
					return (
						<Link
							key={item.id}
							to={item.href}
							smooth={true}
							duration={500}
							offset={-70}
							className="text-xl capitalize cursor-pointer"
							onClick={() => setIsOpen(false)}
						>
							<li className="mb-8">{item.name}</li>
						</Link>
					);
				})}
				<Socials />
			</motion.ul>
		</nav>
	);
};

export default NavMobile;
