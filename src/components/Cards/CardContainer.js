import React from "react";
import "./Card.css";
import Logo from "../../assets/2local logo.svg";
import LoginCard from "./LoginCard";

function CardContainer() {
	return (
		<div className="card-container">
			<img className="logo" src={Logo} alt="" />
			<LoginCard />
		</div>
	);
}

export default CardContainer;
