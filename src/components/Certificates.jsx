import React, { Component } from "react";
import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";
import { certificates } from "../data/certificates";

import "../styles/Certificates.css";

const images = certificates.map(el => el.certificate);

class Certificates extends Component {
	constructor(props) {
		super(props);

		this.state = {
			photoIndex: 0,
			isOpen: false,
		};
	}

	render() {
		const { photoIndex, isOpen } = this.state;
		const photos = certificates.map(item => (
			<div className="certificate-box">
				<img
					src={item.certificate}
					alt={item.title}
					key={item.id}
					data-id={item.id}
					onClick={e =>
						this.setState({
							photoIndex: e.target.getAttribute("data-id") - 1,
							isOpen: true,
						})
					}
				/>
			</div>
		));

		return (
			<section className="certificates">
				<div className="certificates-wrapper">
					<h2 className="heading">Certyfikaty</h2>
					<div className="certificates-gallery">
						{photos}
						{isOpen && (
							<Lightbox
								mainSrc={images[photoIndex]}
								nextSrc={images[(photoIndex + 1) % images.length]}
								prevSrc={
									images[(photoIndex + images.length - 1) % images.length]
								}
								onCloseRequest={() => this.setState({ isOpen: false })}
								onMovePrevRequest={() =>
									this.setState({
										photoIndex:
											(photoIndex + images.length - 1) % images.length,
									})
								}
								onMoveNextRequest={() =>
									this.setState({
										photoIndex: (photoIndex + 1) % images.length,
									})
								}
								enableZoom={false}
							/>
						)}
					</div>
				</div>
			</section>
		);
	}
}

export default Certificates;
