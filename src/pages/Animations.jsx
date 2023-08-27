import React from "react";

import { animationList } from "../data/data";
import Header from "../layouts/Header";

import DecorationInAnimationsPage from "../components/decorationsComponents/DecorationInAnimationsPage";

import "../styles/Animations.css";
import CardFront from "../components/Cards/CardFront";

const Animations = () => {
	const list = animationList.map(el => {
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
				</section>
				<DecorationInAnimationsPage />
			</div>
		</>
	);
};

export default Animations;
