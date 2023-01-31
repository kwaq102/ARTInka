import React from "react";

import heart from "../imgs/heart.svg";
import balloon from "../imgs/balloon.svg";
import brain from "../imgs/brain.svg";
import student from "../imgs/student.svg";

import DecorationInAdvantagesHomePage from "../components/decorationsComponents/DecorationInAdvantagesHomePage";

import "../styles/DecorationInAdvantagesHomePage.css";
import "../styles/Advantages.css";

const Advantages = () => {
	return (
		<section className="advantages">
			<DecorationInAdvantagesHomePage />
			<div className="content-advantages">
				<h2 className="heading">Artinka to</h2>
				<div className="advantage-box">
					<img src={heart} alt="" />
					<h4>Pasja</h4>
					<p>W swoją pracę wkładam całe serce.</p>
				</div>
				<div className="advantage-box">
					<img src={balloon} alt="" />
					<h4>Świetna zabawa</h4>
					<p>
						Dzieci uwielbiają <strong>malowanie twarzy</strong>, a ich radość
						maluje się sama.
					</p>
				</div>
				<div className="advantage-box">
					<img src={brain} alt="" />
					<h4>Kreatywność</h4>
					<p>Nigdy mi jej nie brakuje - dzieci ciągle mi jej dostarczają.</p>
				</div>
				<div className="advantage-box">
					<img src={student} alt="" />
					<h4>Profesjonalizm</h4>
					<p>
						<strong>Malowaniem twarzy</strong> zajmuję się od lat i stawiam na
						ciągły samorozwój.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Advantages;
