import React, { Component } from "react";
import { photos as galleryPhotos } from "../data/gallery.js";
import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";
import Header from "../layouts/Header.jsx";
import "../styles/Gallery.css";

const images = galleryPhotos.map((el) => el.linkBig);

class Gallery extends Component {
	constructor(props) {
		super(props);

		this.state = {
			photoIndex: 0,
			isOpen: false,
		};
	}
	render() {
		const { photoIndex, isOpen } = this.state;
		const photos = galleryPhotos.map((item) => (
			<div className="wrapper-img">
				<img
					src={item.link}
					alt={item.text}
					key={item.id}
					onClick={() => this.setState({ isOpen: true })}
				/>
			</div>
		));
		return (
			<>
				<Header />

				<div className="page-gallery">
					<h2 className="heading">Galeria</h2>
					<div className="gallery">
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
			</>
		);
	}
}

export default Gallery;
