import React, { useState } from "react";

import { animationList } from "../data/data";
import Header from "../layouts/Header";

import DecorationInAnimationsPage from "../components/decorationsComponents/DecorationInAnimationsPage";

import "../styles/Animations.css";
import CardFront from "../components/Cards/CardFront";

const Animations = () => {
	const list = animationList.map((el) => {
		return (
			<CardFront
				photo={el.photo}
				title={el.title}
				description={el.description}
				shortDescription={el.shortDescription}
			/>
		);
	});

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
