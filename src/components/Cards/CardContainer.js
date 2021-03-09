import React from "react";
import "./Card.css";
import Logo from "../../assets/2local logo.svg";
import LoginCard from "./LoginCard";
import NewWalletcard from "./NewWalletcard";

function CardContainer({ name }) {
	return (
		<div className="card-container">
			<img className="logo" src={Logo} alt="" />
			{name === "login" ? (
				<LoginCard />
			) : name === "new-wallet" ? (
				<NewWalletcard />
			) : (
				""
			)}
		</div>
	);
}

export default CardContainer;
