import React from "react";
import { newsletterData } from "../data";

const Newsletter = () => {
	const { title, subtitle, placeholder, btnText } = newsletterData;
	return (
		<div className="bg-none lg:bg-newsletter bg-cover lg:h-[220px] lg:bg-center lg:px-24 xl:bg-auto">
			{/* content wrapper */}
			<div className="flex flex-col justify-between items-center lg:flex-row h-full">
				{/* title and subtitle */}
				<div className="text-center lg:text-left mb-4">
					<h3
						className="text-white text-[26px] font-primary italic capitalize mb-2
          "
					>
						{title}
					</h3>
					<p>{subtitle}</p>
				</div>

				{/* form */}
				<form className="flex flex-col lg:flex-row gap-y-4 gap-x-[10px]">
					<input
						type="text"
						className="input bg-transparent placeholder:text-white/20 placeholder:font-semibold text-white border border-white/20
            focus:ring-1 focus:ring-accent
          "
						placeholder={placeholder}
					/>
					<button className="btn capitalize w-full lg:max-w-[204px]">
						{btnText}
					</button>
				</form>
			</div>
		</div>
	);
};

export default Newsletter;
