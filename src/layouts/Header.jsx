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
		autoplaySpeed: 4000,
		speed: 700,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
		// arrows: false,
	};

	const photos = photosOnSlider.map(photo => (
		<div>
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
		</div>
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

				<Slider {...settings}>{photos}</Slider>
			</div>
		</header>
	);
};

export default Header;
