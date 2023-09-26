import React from "react";
//import testimonial data
import { testimonialData } from "../data";
//import components
import TestimonialCarousel from "./TestimonialCarousel";
//import motion
import { motion } from "framer-motion";
//import variants
import { fadeIn } from "../variants";

const Testimonial = () => {
	const { title, subtitle, modelImg, slider } = testimonialData;

	return (
		<section className="bg-testimonial bg-cover bg-no-repeat  relative top-[340px] lg:top-[40px] h-[750px] pt-[60px] md:pt-[120px] z-10">
			<div className="container mx-auto">
				{/* text */}
				<motion.div
					variants={fadeIn("down", "tween", 0.2, 1.6)}
					initial="hidden"
					whileInView={"show"}
					className="flex flex-col items-center text-center capitalize"
				>
					<h2 className="h2 text-white">{title}</h2>
					<p className="text-white/70 capitalize mb-8">{subtitle}</p>
					<div className="mb-4">
						<img src={modelImg} alt="" />
					</div>
				</motion.div>
				{/* slider */}
				<motion.div
					variants={fadeIn("down", "tween", 0.2, 1.6)}
					initial="hidden"
					whileInView={"show"}
					className="flex justify-center items-center"
				>
					<TestimonialCarousel slider={slider} />
				</motion.div>
			</div>
		</section>
	);
};

export default Testimonial;
