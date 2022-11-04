import React from "react";

import AboutInHomePage from "../components/AboutInHomePage";
import Services from "../components/Services";
import Advantages from "../components/Advantages";
import Certificates from "../components/Certificates";
import Header from "../layouts/Header";

const Home = () => {
	return (
		<>
			<div className="home-page">
				<Header />
				<AboutInHomePage />
				<Services />
				<Advantages />
				<Certificates />
			</div>
		</>
	);
};

export default Home;
