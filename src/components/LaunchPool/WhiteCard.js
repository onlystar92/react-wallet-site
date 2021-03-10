import React from "react";
import Logo from "../../assets/dodo.svg";
import BNBGrey from "../../assets/bnb-grey.svg";

function WhiteCard({ title, icon, sub, apy, participants, stacked }) {
	return (
		<div className="launch-pool-whitecard">
			<img className="white-card-logo" src={Logo} alt="" />
			<div className="white-card-head ">
				<img src={BNBGrey} alt="" />

				<span>BNB POOL</span>
			</div>
			<div className="white-card-sub mt-2">Stake BNB, Earn DODO</div>
			<div className=" d-flex flex-column justify-content-between bottom-wrapper">
				<div className="white-card-bottom">
					<span>APY:</span>
					1.62%
				</div>
				<div className="white-card-bottom">
					<span>Participants:</span>
					189882
				</div>
				<div className="white-card-bottom">
					<span>Total Stacked:</span>
					8,361,393.9477 BNB
				</div>
			</div>
		</div>
	);
}

export default WhiteCard;
