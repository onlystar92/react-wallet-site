import React from "react";
import "./modal.css";
import btcLogo from "../../assets/btc.svg";
import ethLogo from "../../assets/ETH.png";
import ltcLogo from "../../assets/ltc.svg";
import bchLogo from "../../assets/bch.svg";
import xmlLogo from "../../assets/xlm.svg";

function WalletModal({ modal, setModal }) {
	return (
		<div className="walllet-container">
			<div>
				<div className="wallet-heading">Select Asset</div>
				<button className="wallet-quit" onClick={() => setModal(0)}><i className="fa fa-times"></i></button>
			</div>
			<div className="head-line"></div>
			<input className="wallet-search" type="text" placeholder="search name" />

			<div className="item-list">
				<div className="asset-item">
					<img className="item-image" src={btcLogo} alt="" />
					<span className="item-text">Bitcoin BTC</span>
				</div>
				<div className="line" />
				<div className="asset-item"><img className="item-image" src={ethLogo} alt="" /> <span className="item-text">Etherium ETH</span></div>
				<div className="line" />
				<div className="asset-item"><img className="item-image" src={bchLogo} alt="" /> <span className="item-text">Bitcoin Cash BCH</span></div>
				<div className="line" />
				<div className="asset-item"><img className="item-image" src={ltcLogo} alt="" /> <span className="item-text">Chainlink LINK</span></div>
				<div className="line" />
				<div className="asset-item"><img className="item-image" src={xmlLogo} alt="" /> <span className="item-text">Stellar XML</span></div>

			</div>

		</div>
	);
}

export default WalletModal;