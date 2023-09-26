import React, { useState, useEffect } from "react";
//import components
import Nav from "./Nav";
import Socials from "./Socials";

//import logo
import LogoWhite from "../assets/img/header/logo-white.png";
//import motion
import { animate, motion } from "framer-motion";
//import variants
import { fadeIn, staggerContainer } from "../variants";

//header variants
const headerVariant = {
	hidden: {
		padding: "84px 0 84px 0",
		background: "none",
	},
	show: {
		padding: "14px 0 14px 0",
		background: "rgba(0, 0, 0, 0.92)",
		transition: {
			type: "spring",
		},
	},
};

//nav variant
export const navVariants = {
	hidden: {
		clipPath: "circle(5.8% at 50% 0)",
		opacity: 0,
		transition: {
			type: "spring",
			delay: 0.2,
			damping: 140,
			stiffness: 140,
		},
	},
	show: {
		clipPath: "circle(130% at 50% 0)",
		opacity: 1,
		transition: {
			type: "spring",
			stiffness: 80,
		},
	},
};

const Header = () => {
	//header state
	const [isActive, setisActive] = useState(false);
	//nav state
	const [nav, setnav] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			window.scrollY > 50 ? setisActive(true) : setisActive(false);
		});
	});

	return (
		<motion.header
			variants={headerVariant}
			initial="hidden"
			animate={isActive ? "show" : ""}
			className="bg-pink-200 fixed w-full max-w-[1800px] z-50 py-4"
		>
			<motion.div
				variants={staggerContainer(0.3, 1)}
				initial="hidden"
				animate="show"
				className="container mx-auto"
			>
				<div className="flex items-center justify-between text-white px-4 lg:px-0 relative">
					{/* menu button */}
					<motion.div
						variants={fadeIn("down", "tween", 1, 1.4)}
						className={`${
							nav ? "gap-y-0" : "gap-y-2"
						} flex flex-col w-12 h-12 justify-center items-center cursor-pointer border-2 rounded-full p-3 order-2 lg:order-none`}
						onClick={() => setnav(!nav)}
					>
						{/* bar 1 */}
						<motion.div
							initial={{ rotate: 0 }}
							animate={{
								rotate: nav ? -45 : 0,
								translateY: nav ? 2 : 0,
							}}
							className="w-full h-[2px] bg-white"
						></motion.div>
						{/* bar 1 */}
						<motion.div
							initial={{ rotate: 0 }}
							animate={{
								rotate: nav ? 45 : 0,
							}}
							className="w-full h-[2px] bg-white"
						></motion.div>
					</motion.div>
					{/* logo */}
					<motion.div variants={fadeIn("down", "tween", 1.2, 1.4)}>
						<a href="#">
							<img
								src={LogoWhite}
								alt="logo_img"
								className={`${
									isActive
										? "w-[90px] h-[90px]"
										: "w-[107px] h-[107px] "
								}`}
							/>
						</a>
					</motion.div>
					{/* socials */}
					<div className="hidden lg:flex">
						<Socials />
					</div>
					{/* nav item */}
					<motion.div
						variants={navVariants}
						initial="hidden"
						animate={nav ? "show" : ""}
						className="absolute bg-accent w-[310px] h-[50vh] right-0 lg:left-0 bottom-0 top-[120px] z-50 rounded-xl shadow-xl"
					>
						<Nav />
					</motion.div>
				</div>
			</motion.div>
		</motion.header>
	);
};

export default Header;
