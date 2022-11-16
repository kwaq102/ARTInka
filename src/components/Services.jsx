import React from "react";

import photoTEst from "../imgs/paintFace2.jpg";
import photoTEst2 from "../imgs/children.jpg";

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
							ARTinka zajmuję się głównie <strong>malowaniem twarzy</strong> na
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
					<img src={photoTEst} alt="" />
				</div>
			</div>
			<div className="wrapper-services">
				<div className="content-services">
					<h2>W ofercie</h2>
					<div>
						<p>Oprócz malowania twarzy świadczę inne usługi eventowe:</p>
						<ul className="list">
							<li>zaplatanie kolorowych warkoczyków</li>
							<li>tatuaże brokatowe</li>
							<li>wielkie bański mydlane</li>
							<li>warsztaty balonowe</li>
							<li>
								kreatywne gry zespołowe z wykorzystaniem pistoletów na
								podczerwień (laser tag)
							</li>
						</ul>
					</div>
				</div>
				<div className="photos-services">
					<img src={photoTEst2} alt="" className="left-img" />
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
