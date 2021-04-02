import React, { useState } from "react";
import "./modal.css";
import btcLogo from "../../assets/btc.svg";
import ethLogo from "../../assets/ETH.png";
import ltcLogo from "../../assets/ltc.svg";
import bchLogo from "../../assets/bch.svg";
import xlmLogo from "../../assets/xlm.svg";

function ConnectModal({ modal, setModal }) {
	const [search, setSearch] = useState('');
	const assets = [
		{ text: "Bitcoin BTC", image: btcLogo },
		{ text: "Etherium ETH", image: ethLogo },
		{ text: "Bitcoin Cash BCH", image: bchLogo },
		{ text: "Chainlink LINK", image: ltcLogo },
		{ text: "Stellar XML", image: xlmLogo },
	];
	return (
		<div className="connect-container">
			<div className="wallet-header">
				<div className="connect-heading">Connect Wallet</div>
				<button className="wallet-quit" onClick={() => setModal(0)}><i className="fa fa-times"></i></button>
			</div>
			<div className="connect-head-line"></div>
			
			<div className="item-list col-1g-12">
				{
					assets.map((value, index) => value.text.toLowerCase().includes(search.toLowerCase()) &&
						<div>
							<div className="asset-item">
								<img className="connect-item-image" src={value.image} alt="" />
								<span className="item-text">{value.text}</span>
							</div>
							<div className="line" />
						</div>)
				}
			</div>

		</div>
	);
}

export default ConnectModal;