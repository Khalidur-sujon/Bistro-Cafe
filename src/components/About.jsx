import React from "react";
//import data
import { aboutData } from "../data";
//motion
import { motion } from "framer-motion";
//import variants
import { fadeIn, staggerContainer, plateVariants } from "../variants";

const About = () => {
	const { pretitle, title, subtitle, btnText, image } = aboutData;
	return (
		<seciton className=" min-h-[620px]">
			<div className="container mx-auto min-h-[620px]">
				{/* text and image container */}
				<motion.div
					variants={staggerContainer}
					initial="hidden"
					whileInView={"show"}
					viewport={{ once: false, amount: 0.6 }}
					className="min-h-[620px] flex flex-col items-center lg:flex-row "
				>
					{/* text */}
					<motion.div
						variants={fadeIn("right", "tween", 0.2, 1.8)}
						className=" flex-1 text-center lg:text-left"
					>
						<div className="pretitle">{pretitle}</div>
						<h2 className="h2 capitalize">{title}</h2>
						<p className="mb-8 max-w-[560px]">{subtitle}</p>
						<button className="btn mx-auto capitalize lg:m-0">
							{btnText}
						</button>
					</motion.div>
					{/* image */}
					<motion.div
						variants={plateVariants}
						className="-mb-[300px] -mr-[186px] z-10"
					>
						<img src={image} alt="" />
					</motion.div>
				</motion.div>
			</div>
		</seciton>
	);
};

export default About;
