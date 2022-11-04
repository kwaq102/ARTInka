import React from "react";

import starPink from "../../imgs/decorationElements/starPink.png";
import butterflyOpacity from "../../imgs/decorationElements/butterflyOpacity.png";
import flower from "../../imgs/decorationElements/flowerAndButterfly.png";
import "../../styles/DecorationInAboutHomePage.css";
import { Fade } from "react-awesome-reveal/dist/index.js";

const DecorationInAboutHomePage = () => {
	return (
		<>
			<div className="wrapper-decorations">
				<div className="wrap-img starPink">
					<Fade>
						<img src={starPink} alt="" />
					</Fade>
				</div>
				<div className="wrap-img butterflyOpacity">
					<Fade direction="left">
						<img src={butterflyOpacity} alt="" />
					</Fade>
				</div>
				<div className="wrap-img flower">
					<Fade direction="right">
						<img src={flower} alt="" />
					</Fade>
				</div>
				{/* <img src={skyrocket} alt="" className="skyrocket" /> */}
			</div>
		</>
	);
};

export default DecorationInAboutHomePage;
