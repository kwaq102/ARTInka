import React from "react";
import { Fade } from "react-awesome-reveal/dist/index.js";

import justyna from "../imgs/greetingHomePage/justyna1.jpg";
import justyna2 from "../imgs/greetingHomePage/justyna2.jpg";
import justyna3 from "../imgs/greetingHomePage/justyna3.jpg";

import DecorationInAboutHomePage from "./decorationsComponents/DecorationInAboutHomePage";

import "../styles/AboutInHomePage.css";
import Button from "./Button";

const AboutInHomePage = () => {
	return (
		<section className="about-in-home-page">
			<DecorationInAboutHomePage />
			<div className="wrapper-about-in-home-page">
				<div className="content-about-in-home-page">
					<Fade>
						<h2 className="heading">O mnie</h2>
						<p>
							<span>
								Mam na imię Justyna, dla znajomych Justa, Tinka, Dżasta, jak kto
								woli. Jestem magistrem pedagogiki opiekuńczo-wychowawczej z
								arteterapią. Od zawsze interesowała mnie sztuka, szczególnie
								dziedzina malarstwa.
							</span>{" "}
							<strong>Malowanie twarzy</strong> pasjonuje mnie już od wielu lat,
							ostatnio zaczęłam szkolić się w kierunku face paintingu na wyższym
							poziomie. Dla Was zamierzam się szkolić u najlepszych
							profesjonalistów. Oprócz malowania interesuję się też różnymi
							atrakcjami eventowymi, które są uwielbiane przez{" "}
							<strong>dzieci</strong>. Bo <strong>dla dzieci</strong> to
							wszystko stworzyłam.
						</p>
						<Button text="Zobacz więcej" path="/" />
					</Fade>
				</div>
				<div className="photos-about-in-home-page">
					<img src={justyna2} alt="Pomalowana twarz we wzorze liska." />
					<img src={justyna} alt="Pomalowana twarz, wzór kota." />
					<img src={justyna3} alt="Malowanie twarzy dziewczynki" />
				</div>
			</div>
		</section>
	);
};

export default AboutInHomePage;
