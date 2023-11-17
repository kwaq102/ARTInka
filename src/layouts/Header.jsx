import React from "react";

import { photosOnSlider } from "../data/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fade } from "react-awesome-reveal/dist/index.js";
import "../styles/Header.css";

const randomInitialPhoto = () =>
	Math.floor(Math.random() * photosOnSlider.length);

const Header = () => {
	const settings = {
		autoplay: true,
		speed: 5000,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: randomInitialPhoto(),
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
						<span>
							Artystyczne <strong>malowanie twarzy</strong>
						</span>
						<span>ARTinka - Justyna Baran</span>
					</Fade>
				</h1>
				<Slider {...settings}>{photos}</Slider>
			</div>
		</header>
	);
};

export default Header;
