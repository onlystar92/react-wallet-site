import React from "react";
import "./Card.css";
import Logo from "../../assets/2local logo.svg";

function CardContainer() {
	return (
		<div className="card-container">
			<img className="logo" src={Logo} alt="" />
		</div>
	);
}

export default CardContainer;
