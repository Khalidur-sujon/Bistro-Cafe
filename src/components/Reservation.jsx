import React, { useState } from "react";
//import reservation data
import { reservationData } from "../data";
//import date picker
import DatePicker from "react-datepicker";
//date picker css
import "react-datepicker/dist/react-datepicker.css";
//import time picker
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
//time picker css
import "../timepicker.css";
//import icon
import { FaUsers, FaCalendar, FaClock } from "react-icons/fa";
//import motion
import { motion } from "framer-motion";
//import variants
import { fadeIn, staggerContainer } from "../variants";

const Reservation = () => {
	const { title, subtitle, modelImg, btnText } = reservationData;
	const [startDate, setstartDate] = useState(new Date());
	const [value, setvalue] = useState("10:00");

	return (
		<section className=" min-h-[300px] top-96 lg:top-[170px] relative z-30 pb-20 lg:pb-0">
			<div className="container mx-auto text-white">
				{/* text */}
				<motion.div
					variants={staggerContainer}
					initial="hidden"
					whileInView={"show"}
					className="text-center"
				>
					<motion.h2
						variants={fadeIn("down", "tween", 0.2, 1.6)}
						className="h2 capitalize"
					>
						{title}
					</motion.h2>
					<motion.p
						variants={fadeIn("down", "tween", 0.4, 1.6)}
						className="mb-8  text-dark"
					>
						{subtitle}
					</motion.p>
					{/* model img */}
					<motion.div
						variants={fadeIn("down", "tween", 0.4, 1.6)}
						className="flex justify-center mb-8"
					>
						<img src={modelImg} alt="" />
					</motion.div>
				</motion.div>
				{/* forms */}
				<motion.form
					variants={fadeIn("up", "tween", 0.7, 1.6)}
					initial="hidden"
					whileInView={"show"}
					className="text-center"
				>
					<div className="flex flex-col gap-y-4 lg:flex-row  items-center justify-between mb-8">
						{/* date picker */}
						<div>
							<div className="flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3">
								<FaCalendar />
								<div>Choose Date</div>
							</div>
							<DatePicker
								className="input cursor-pointer"
								selected={startDate}
								onChange={(date) => setstartDate(date)}
							/>
						</div>

						{/* time picker */}
						<div>
							<div className="flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3">
								<FaClock />
								<div>Choose Time</div>
							</div>
							<TimePicker
								className="input cursor-pointer text-start"
								clearIcon={false}
								clockIcon={false}
								value={value}
								// onChange={(value) => setvalue(value)}
								onChange={setvalue}
							/>
						</div>

						{/* person picker */}
						<div>
							<div className="flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3">
								<FaUsers />
								<div>How Many People?</div>
							</div>
							<input
								className="input"
								type="text"
								placeholder="1"
							/>
						</div>
					</div>
					<div className="max-w-[316px] flex items-center justify-center mx-auto">
						<button className="btn capitalize w-full lg:w-auto">
							{btnText}
						</button>
					</div>
				</motion.form>
			</div>
		</section>
	);
};

export default Reservation;
