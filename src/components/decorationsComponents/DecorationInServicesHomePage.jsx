import React from "react";

import unicorns from "../../imgs/decorationElements/unicorns.png";
import rainbow2 from "../../imgs/decorationElements/rainbow2.png";
import redHeartInStar from "../../imgs/decorationElements/redHeartInStar.png";
import threeBalloons from "../../imgs/decorationElements/3balloons.png";
import "../../styles/DecorationInServicesHomePage.css";
import { Fade } from "react-awesome-reveal/dist/index.js";

const DecorationElementsInHeader = () => {
	return (
		<>
			<div className="wrapper-decorations">
				<div className="wrap-img unicorns">
					<Fade triggerOnce={true} direction="right">
						<img src={unicorns} alt="" />
					</Fade>
				</div>

				<div className="wrap-img redHeartInStar">
					<Fade direction="left" triggerOnce={true}>
						<img src={redHeartInStar} alt="" />
					</Fade>
				</div>
				<div className="wrap-img threeBalloons">
					<Fade triggerOnce={true}>
						<img src={threeBalloons} alt="" />
					</Fade>
				</div>
			</div>
		</>
	);
};

export default DecorationElementsInHeader;
