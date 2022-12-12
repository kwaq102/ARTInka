import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Header from "../layouts/Header";

import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";

import "../styles/PriceList.css";
import { Navigation, Pagination } from "swiper";

const PriceList = () => {
	return (
		// https://codepen.io/chouaibblgn45/pen/NaGKox
		<>
			<Header />
			<div className="page-priceList">
				<section className="priceList">
					<h2 className="heading">
						Cennik <sup>*</sup>
					</h2>
					<div className="priceList-wrapper">
						<Swiper
							slidesPerView={3}
							pagination={{
								clickable: true,
							}}
							navigation={true}
							modules={[Pagination, Navigation]}
							breakpoints={{
								300: {
									slidesPerView: 1,
								},
								900: {
									slidesPerView: 2,
								},
								1200: {
									slidesPerView: 3,
								},
							}}
						>
							<SwiperSlide>
								<div className="priceList-box">
									<h4>Artystyczne malowanie twarzy</h4>
									<div className="priceList-block">
										<p>
											zabawy mniejsze, do 25 osób (np. urodzinki, komunie,
											wesela, itp.)
										</p>
										<span>
											130 zł/
											<sub>h</sub>
										</span>
									</div>
									<div className="priceList-block">
										<p>
											zabawy średnie, około 25-50 osób (np. bale karnawałowe,
											imprezy grup klasowych, przedszkolaków, itp.)
										</p>
										<span>
											150 zł/
											<sub>h</sub>
										</span>
									</div>
									<div className="priceList-block">
										<p>
											zabawy duże, powyżej 50 osób (różnego rodzaju eventy,
											koncerty, festiwale, pikniki, imprezy firmowe, dożynki,
											itp.)
										</p>
										<span>
											180 zł/<sub>h</sub>
										</span>
									</div>

									<Button
										text="Szczegóły"
										btnClass="btn-priceList"
										path="/stanowiska-animacyjne"
									/>
								</div>
							</SwiperSlide>

							<SwiperSlide>
								<div className="priceList-box">
									<h4>Tatuaże brokatowe</h4>
									<div className="priceList-block">
										<p>zabawy mniejsze, do 25 osób</p>
										<span>
											10 zł/<sub>osobę</sub>
										</span>
									</div>
									<div className="priceList-block">
										<p>zabawy większe, powyżej 25 osób</p>
										<span>
											160 zł/<sub>h</sub>
										</span>
									</div>
									<Button
										text="Szczegóły"
										btnClass="btn-priceList"
										path="/stanowiska-animacyjne"
									/>
								</div>
							</SwiperSlide>

							<SwiperSlide>
								<div className="priceList-box">
									<h4>Zaplatanie kolorowych warkoczyków</h4>
									<div className="priceList-block">
										<p>zabawy mniejsze, do 25 osób</p>
										<span>
											10 zł/<sub>warkoczyk</sub>
										</span>
									</div>
									<div className="priceList-block">
										<p>zabawy mniejsze, do 25 osób</p>
										<span>
											150 zł/<sub>h</sub>
										</span>
									</div>
									<Button
										text="Szczegóły"
										btnClass="btn-priceList"
										path="/stanowiska-animacyjne"
									/>
								</div>
							</SwiperSlide>

							<SwiperSlide>
								<div className="priceList-box">
									<h4>Laser tag - laserowy paintball</h4>
									<div className="priceList-block">
										<p>
											Zespołowy sport z wykorzystaniem pistoletów na
											podczerwień. Jednocześnie może grać 10 osób.
										</p>
										<span>
											15 zł/<sub>osobę</sub>
										</span>
										<span>30 min. gry</span>
									</div>
									<Button
										text="Szczegóły"
										btnClass="btn-priceList"
										path="/stanowiska-animacyjne"
									/>
								</div>
							</SwiperSlide>

							<SwiperSlide>
								<div className="priceList-box">
									<h4>Warsztaty kreatywne</h4>
									<div className="priceList-block">
										<p>
											Kreatywne koraliki. To kreatywna zabawa, z której może
											powstać wiele ciekawych rzeczy.
										</p>
										<span>
											10 zł/<sub>osobę</sub>
										</span>
									</div>

									<div className="priceList-block">
										<p>Inne warsztaty zgodnie z zainteresowaniem klienta</p>
										<span>Cena ustalana indywidualnie</span>
									</div>
									<Button
										text="Szczegóły"
										btnClass="btn-priceList"
										path="/stanowiska-animacyjne"
									/>
								</div>
							</SwiperSlide>

							<SwiperSlide>
								<div className="priceList-box">
									<h4>Przypinki i magnesy</h4>

									<div className="priceList-block">
										<p>
											Przypinki z agrafką Ø25mm i Ø59mm. Własnoręczne tworzenie
											przypinek.
										</p>
										<span>
											Ø25mm - 8zł/<sub>osobę</sub>
										</span>
										<span>
											Ø59mm - 12zł/<sub>osobę</sub>
										</span>
									</div>
									<div className="priceList-block">
										<p>Magnesy Ø25mm i Ø59mm. Tworzenie własnych magnesów</p>
										<span>
											Ø25mm - 10zł/<sub>osobę</sub>
										</span>
										<span>
											Ø59mm - 15zł/<sub>osobę</sub>
										</span>
									</div>
									<div className="priceList-block">
										<p>
											Przypinki i magnesy podczas dużych imprez, festynów,
											imprez firmowych.
										</p>
										<span>
											Przypinki Ø25mm - 180zł/<sub>h</sub>
										</span>
										<span>
											Przypinki Ø59mm - 210zł/<sub>h</sub>
										</span>
										<span>
											Magnesy Ø25mm - 200zł/<sub>h</sub>
										</span>
										<span>
											Magnesy Ø59mm - 250zł/<sub>h</sub>
										</span>
									</div>

									<Button
										text="Szczegóły"
										btnClass="btn-priceList"
										path="/stanowiska-animacyjne"
									/>
								</div>
							</SwiperSlide>

							<SwiperSlide>
								<div className="priceList-box">
									<h4>Warsztaty balonowe</h4>
									<div className="priceList-block">
										<p>
											Dzieci tworzą zwierzątka, miecze, kwiatki, różdżki, ćwiczą
											motorykę i utrwalają kolory.
										</p>
										<span>10 zł/figurkę</span>
									</div>
									<div className="priceList-block">
										<p>
											Dzieci otrzymują balony wykonane przez animatora, mogą
											wybrać sobie wzór, a później samodzielnie je ozdobić.
										</p>
										<span>
											100 zł/<sub>h</sub>
										</span>
									</div>
									<Button
										text="Szczegóły"
										btnClass="btn-priceList"
										path="/stanowiska-animacyjne"
									/>
								</div>
							</SwiperSlide>

							<SwiperSlide>
								<div className="priceList-box">
									<h4>Bańki mydlane</h4>
									<div className="priceList-block">
										<p>Zamykanie w bańce mydlanej</p>
										<span>
											100 zł <sub>max 12 osób</sub>
										</span>
										<span>Powyżej 12 osób - cena ustalana indywidualnie</span>
									</div>
									<div className="priceList-block">
										<p>Tworzenie wielkich baniek</p>
										<span>
											100 zł/<sub>5 litrów płynu</sub>
										</span>
									</div>
									<Button
										text="Szczegóły"
										btnClass="btn-priceList"
										path="/stanowiska-animacyjne"
									/>
								</div>
							</SwiperSlide>

							<SwiperSlide>
								<div className="priceList-box">
									<h4>Kącik malucha</h4>
									<div className="priceList-block">
										<p>
											Kącik, w którym tworzę przestrzeń dla mniejszych dzieci,
											ale nie tylko.
										</p>
										<span>
											70 zł/<sub>h</sub>
										</span>
									</div>
									<Button
										text="Szczegóły"
										btnClass="btn-priceList"
										path="/stanowiska-animacyjne"
									/>
								</div>
							</SwiperSlide>
						</Swiper>
					</div>
				</section>
				<section className="priceList-description">
					<ul>
						<li>
							<sup>*</sup> Powyższe ceny są cenami orientacyjnymi.
						</li>
						<li>
							Przy zamówieniu kilku usług jednocześnie, proponuję zniżkę cenową
							ustalaną indywidualnie.
						</li>
						<li>
							Przy wyborze jednej usługi wycenianej zgodnie z ilością dzieci,
							np. warsztaty kreatywne, balonowe, tatuaże brokatowe lub inne,
							przyjmuję usługę przy minimum 8 dzieci (ewentualnie przy mniejszej
							ilości cena będzie ustalana indywidualnie).
						</li>
						<li>
							Przy usługach wycenionych za każdą godzinę pracy- zamawiając
							powyżej 2 godzin proponuję zniżkę ceny.
						</li>
						<li>
							Przy stałej współpracy z firmami, szkołami, animatorami i innymi
							zainteresowanymi również proponuję zniżkę na usługi.
						</li>
						<li>Za dojazd poza terenem Elbląga doliczam 1 zł/km.</li>
						<li>
							W celu uzyskania szczegółowych informacji dotyczących cen i usług
							zaprawszam do <Link>kontaktu</Link>
						</li>
					</ul>
				</section>
			</div>
		</>
	);
};

export default PriceList;
