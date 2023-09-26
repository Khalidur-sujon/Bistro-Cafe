import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "../slider.css";

const TestimonialCarousel = ({ slider }) => {
	return (
		<Carousel
			showThumbs={false}
			infiniteLoop={true}
			showStatus={false}
			showIndicators={false}
			autoPlay={false}
			className="w-full max-w-[1400px] flex items-center justify-center"
		>
			{slider.map((item, index) => {
				const { image, message, name, occupation } = item;

				return (
					<div
						key={index}
						className="max-w-[840px] mx-auto text-white px-24"
					>
						<div className="text-lg mb-9 lg:text-2xl">
							{message}
						</div>
						<div className="max-w-[70px] lg:max-w-[100px] mx-auto mb-2">
							<img src={image} alt="" />
						</div>
						<div className="font-bold text-[22px] text-accent">
							{name}
						</div>
						<div className="font-medium italic">{occupation}</div>
					</div>
				);
			})}
		</Carousel>
	);
};

export default TestimonialCarousel;
