import React from "react";

import { photosOnSlider } from "../data/data";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../styles/Header.css";
import { Fade } from "react-awesome-reveal/dist/index.js";

const Header = () => {
	const settings = {
		autoplay: true,
		autoplaySpeed: 10000,
		speed: 3000,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
	};

	const photos = photosOnSlider.map(photo => (
		<picture>
			<source
				class="img-slider"
				media="(max-width: 500px)"
				srcset={photo.photoSmall}
			/>
			<source
				class="img-slider"
				media="(max-width: 900px)"
				srcset={photo.photoMedium}
			/>
			<img class="img-slider" src={photo.photo} alt={photo.title} />
		</picture>
	));

	return (
		<header id="header">
			<div className="header">
				<h1>
					<Fade cascade direction="up">
						<strong>Artystyczne malowanie twarzy</strong>
						<strong>ARTinka - Justyna Baran</strong>
					</Fade>
				</h1>

				<Fade>
					<Slider {...settings}>{photos}</Slider>
				</Fade>
			</div>
		</header>
	);
};

export default Header;
