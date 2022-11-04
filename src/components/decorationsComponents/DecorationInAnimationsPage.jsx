import React from "react";

import rainbow from "../../imgs/decorationElements/rainbow.png";
import blueStar from "../../imgs/decorationElements/blueStar.png";
import starOrange from "../../imgs/decorationElements/starOrange.png";
import starPink from "../../imgs/decorationElements/starPink.png";
import yellowStar from "../../imgs/decorationElements/yellowStar.png";
import { Fade } from "react-awesome-reveal/dist/index.js";

import "../../styles/DecorationInAnimationsPage.css";

const DecorationElementsInHeader = () => {
	return (
		<>
			<div className="wrapper-decorations">
				<div className="wrap-img rainbow">
					<Fade direction="right" triggerOnce={true}>
						<img src={rainbow} alt="" />
					</Fade>
				</div>

				<div className="wrap-img blueStar">
					<Fade direction="left">
						<img src={blueStar} alt="" />
					</Fade>
				</div>
				<div className="wrap-img blueStar2">
					<Fade triggerOnce={true} direction="right">
						<img src={blueStar} alt="" />
					</Fade>
				</div>

				<div className="wrap-img blueStar3">
					<Fade triggerOnce={true}>
						<img src={blueStar} alt="" />
					</Fade>
				</div>

				<div className="wrap-img starOrange">
					<Fade>
						<img src={starOrange} alt="" />
					</Fade>
				</div>
				<div className="wrap-img starOrange2">
					<Fade direction="left">
						<img src={starOrange} alt="" />
					</Fade>
				</div>
				<div className="wrap-img starOrange3">
					<Fade>
						<img src={starOrange} alt="" />
					</Fade>
				</div>

				<div className="wrap-img starPink-offer">
					<Fade>
						<img src={starPink} alt="" />
					</Fade>
				</div>
				<div className="wrap-img starPink2-offer">
					<Fade direction="right">
						<img src={starPink} alt="" />
					</Fade>
				</div>

				<div className="wrap-img yellowStar-offer">
					<Fade direction="up">
						<img src={yellowStar} alt="" />
					</Fade>
				</div>
			</div>
		</>
	);
};

export default DecorationElementsInHeader;
