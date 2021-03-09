import React from "react";
import "./Card.css";
import Logo from "../../assets/2local logo.svg";
import LoginCard from "./LoginCard";
import NewWalletcard from "./NewWalletcard";
import WalletExchange from "./WalletExchange";

function CardContainer({ name }) {
	return (
		<div className="card-container">
			<img className="logo" src={Logo} alt="" />
			{name === "login" ? (
				<LoginCard />
			) : name === "new-wallet" ? (
				<NewWalletcard />
			) : name === "wallet-exchange" ? (
				<WalletExchange />
			) : (
				""
			)}
		</div>
	);
}

export default CardContainer;
