import React from "react";
//import social data
import { socialData } from "../data";
const Socials = () => {
	return (
		<div className="flex gap-x-[10px]">
			{socialData.map((item, index) => (
				<a
					className="w-[35px] h-[35px] border border-white/20 rounded-full flex justify-center items-center text-sm hover:text-accent hover:border-accent transition-all"
					key={index}
					href={item.href}
				>
					{item.icon}
				</a>
			))}
		</div>
	);
};

export default Socials;
