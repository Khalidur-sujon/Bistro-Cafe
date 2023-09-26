import React from "react";
import Hero from "./components/Hero";
import Testimonial from "./components/Testimonial";
import Reservation from "./components/Reservation";
import Footer from "./components/Footer";
import About from "./components/About";
import Menu from "./components/Menu";
import Team from "./components/Team";

function App() {
	return (
		<div className="h-full bg-pattern bg-repeat mx-auto overflow-hidden max-w-[1800px]">
			<Hero />
			<About />
			<Menu />
			<Team />
			<Testimonial />
			<Reservation />
			<Footer />
			<div className="h-[380px] md:h-[370px]"></div>
		</div>
	);
}

export default App;
