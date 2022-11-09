import React from "react";

import { animationList } from "../data/data";
import Header from "../layouts/Header";

import DecorationInAnimationsPage from "../components/decorationsComponents/DecorationInAnimationsPage";

import "../styles/Animations.css";

const Animations = () => {
	const list = animationList.map((el) => (
		<div className="content-animation-box">
			<div className="animation-img-wrapper">
				<div>
					<img src={el.photo} alt="" />
				</div>
			</div>
			<h4>{el.title}</h4>
			<p>{el.description}</p>
		</div>
	));

	return (
		<>
			<Header />
			<div className="page-animations">
				<section className="animations">
					<h2>W ofercie</h2>
					{list}
					<p>
						<span>UWAGA!</span>
						Artinka zajmuję się działalnością artystyczną, głównie malowaniem
						twarzy. Nie jestem animatorem i nie prowadzę imprez- zamiast tego
						tworzę tzw. stanowiska artystyczno-animacyjne, z których dzieci mogą
						skorzystać w dowolnej chwili podczas zabawy. Współpracuję z firmami
						animacyjnymi, z którymi świadczę wspólnie usługi, tworząc idealną i
						niezapomnianą imprezę dla dzieci.
					</p>
				</section>
				<DecorationInAnimationsPage />
			</div>
		</>
	);
};

export default Animations;
