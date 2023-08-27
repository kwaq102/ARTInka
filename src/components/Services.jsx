import React from "react";

import offer from "../imgs/offerHomePage/offer.jpg";
import offer2 from "../imgs/offerHomePage/offer2.jpg";

import DecorationInServicesHomePage from "../components/decorationsComponents/DecorationInServicesHomePage";

import "../styles/Services.css";

const Services = () => {
	return (
		<section className="services custom-shape-divider-top-1668633026">
			<DecorationInServicesHomePage />
			<div className="wrapper-services reverse">
				<div className="content-services">
					<h2 className="heading">
						<strong>Artinka</strong>
					</h2>
					<div>
						<p>
							ARTinka zajmuje się głównie <strong>malowaniem twarzy</strong> na
							różnego rodzaju imprezach tematycznych. Możesz wynająć mnie na:{" "}
						</p>
						<ul>
							<li>urodzinki</li>
							<li>festyny</li>
							<li>imprezy firmowe</li>
							<li>dożynki</li>
							<li>wesele</li>
							<li>komunie</li>
							<li>bale</li>
							<li>mikołajki</li>
							<li>dzień dziecka</li>
							<li>i wiele, wiele innych wydarzeń...</li>
						</ul>
					</div>
				</div>
				<div className="photos-services">
					<img src={offer} alt="" />
				</div>
			</div>
			<div className="wrapper-services">
				<div className="content-services">
					<h2>W ofercie</h2>
					<div>
						<ul className="list">
							<li>artystyczne malowanie twarzy i ciała</li>
							<li>malowanie brzucha ciążowego</li>
							<li>tatuaże brokatowe</li>
							<li>zaplatanie kolorowych warkoczyków</li>
							<li>laser tag-laserowy paintball</li>
							<li>
								warsztaty kreatywne: tworzenie przypinek i magnesów (25Ø i 56Ø),
								kreatywne koraliki i inne
							</li>
							<li>warsztaty balonowe</li>
							<li>modelowanie balonów</li>
							<li>zamykanie w bańce mydlanej</li>
							<li>tworzenie ogromnych baniek mydlanych</li>
							<li>kącik malucha</li>
						</ul>
					</div>
				</div>
				<div className="photos-services">
					<img src={offer2} alt="" className="left-img" />
				</div>
				<p className="text">
					Każda z tych usług to dodatkowa atrakcja do Twojej imprezy.
				</p>
				<p className="text">
					Stwórz swoje własne stanowiska animacyjne i baw się razem z{" "}
					<strong>ARTinką!</strong>
				</p>
			</div>
		</section>
	);
};

export default Services;
