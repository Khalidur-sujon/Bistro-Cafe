import React from "react";
//import team data
import { teamData } from "../data";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";

const Team = () => {
	const { pretitle, title, sub1, name, occupation, signatureImg, chefImg } =
		teamData;
	return (
		<section className="top-96 z-10 lg:top-[100px] min-h-[720px] relative">
			<div className="container mx-auto">
				{/* text & image wrapper */}
				<div className="flex flex-col lg:flex-row  lg:gap-x-[120px] items-center lg:items-start">
					{/* text */}
					<motion.div
						variants={fadeIn("down", "tween", 0.6, 1.6)}
						initial="hidden"
						whileInView={"show"}
						className="flex-1 text-center lg:text-left lg:pt-24"
					>
						<div className="pretitle">{pretitle}</div>
						<h2 className="h2">{title}</h2>
						<p>{sub1}</p>
						<div className="my-[26px]">
							<div className="text-2xl capitalize font-semibold text-accent">
								{name}
							</div>
							<div className="text-[15px] capitalize font-semibold text-grey/70">
								{occupation}
							</div>
						</div>
						<div className="flex justify-center lg:justify-start mb-6 lg:mb-0">
							<img src={signatureImg} alt="" />
						</div>
					</motion.div>
					{/* image */}
					<motion.div
						variants={fadeIn("down", "tween", 0.7, 1.6)}
						initial="hidden"
						whileInView={"show"}
						className=" flex-1"
					>
						<img src={chefImg} alt="" />
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Team;
