import React from "react";
//import data
import { heroData } from "../data";
//import components
import Header from "./Header";
//import motion
import { motion } from "framer-motion";
//import variants
import { fadeIn, staggerContainer } from "../variants";

const Hero = () => {
	const { pretitle, title, subtitle, btnText } = heroData;
	return (
		<section className="min-h-[980px] bg-hero bg-cover bg-right">
			{/* header */}
			<Header />
			<div className="container mx-auto  min-h-[980px] flex items-center justify-center">
				{/* text */}
				<motion.div
					variants={staggerContainer(0.3, 1)}
					initial="hidden"
					whileInView={"show"}
					className="text-center flex flex-col items-center"
				>
					{/* pretitle */}
					<motion.div
						variants={fadeIn("down", "tween", 0.2, 1.1)}
						className="text-white text-[24px] lg:text-[28px] font-primary italic lg:font-medium mb-1"
					>
						{pretitle}
					</motion.div>
					{/* title */}
					<motion.h1
						variants={fadeIn("down", "tween", 0.3, 1.1)}
						className="h1 mb-5"
					>
						{title}
					</motion.h1>
					{/* subtitle */}
					<motion.div
						variants={fadeIn("down", "tween", 0.4, 1.1)}
						className="text-white mb-8 max-w-[540px]"
					>
						{subtitle}
					</motion.div>
					{/* btntext */}
					<motion.div variants={fadeIn("down", "tween", 0.5, 1.1)}>
						<button className="btn">{btnText}</button>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default Hero;
