import React from "react";

import smilingSun from "../../imgs/decorationElements/smilingSun.png";
import smilingCloud from "../../imgs/decorationElements/smilingCloud.png";
import blueCloud from "../../imgs/decorationElements/blueCloud.png";
import blueCloud2 from "../../imgs/decorationElements/blueCloud2.png";

import "../../styles/DecorationInAdvantagesHomePage.css";
import { Fade } from "react-awesome-reveal/dist/index.js";

const DecorationInAdvantagesHomePage = () => {
	return (
		<>
			<div className="wrapper-decorations">
				<div className="wrap-img smilingSun">
					<Fade triggerOnce={true} direction="right">
						<img src={smilingSun} alt="" />
					</Fade>
				</div>
				<div className="wrap-img smilingCloud">
					<Fade triggerOnce={true} direction="right">
						<img src={smilingCloud} alt="" />
					</Fade>
				</div>
				<div className="wrap-img blueCloud2">
					<Fade triggerOnce={true} direction="left">
						<img src={blueCloud2} alt="" />
					</Fade>
				</div>
				<div className="wrap-img blueCloud">
					<Fade triggerOnce={true} direction="left">
						<img src={blueCloud} alt="" />
					</Fade>
				</div>
			</div>
		</>
	);
};

export default DecorationInAdvantagesHomePage;
