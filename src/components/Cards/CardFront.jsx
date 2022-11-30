import React, { useState } from "react";

const CardFront = ({ photo, title, description, shortDescription }) => {
	const [card, setCard] = useState(false);

	const cardClassName = card ? "card card-show" : "card";

	// const showCard = () => {
	// 	console.log(card);
	// 	card === "card" ? setCard("card card-show") : setCard("card");
	// 	console.log(card);
	// };
	return (
		<div className="content-animation-box">
			<div className={cardClassName}>
				<h4 className="card-heading card-heading-show ">{title}</h4>
				<p className="card-description">{description}</p>
				<button className="btn btn-offer" onClick={() => setCard(!card)}>
					Zamknij
				</button>
			</div>
			<div className="animation-img-wrapper">
				<div>
					<img src={photo} alt="" />
				</div>
			</div>
			<h4 className="card-heading">{title}</h4>
			<p className="card-description">{shortDescription}</p>
			<button className="btn btn-offer" onClick={() => setCard(!card)}>
				Sprawdź
			</button>
		</div>
	);
};

export default CardFront;
