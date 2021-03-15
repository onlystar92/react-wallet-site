import React from "react";
import BlueCard from "./BlueCard";
import "./LaunchPool.css";
import WhiteCard from "./WhiteCard";

function LaunchPoolContainer() {
	return (
		<div className="text-left pt-4 launch-pool-container">
			<h1 className="font-weight-bold heading">Launch Pool</h1>
			<div className="d-flex cards-wrapper">
				<BlueCard />
				<WhiteCard />
				<WhiteCard />
				<WhiteCard />
			</div>
			<div className="d-flex cards-wrapper">
				<BlueCard />
				<WhiteCard />
				<WhiteCard />
				<WhiteCard />
			</div>
			<div className="d-flex cards-wrapper">
				<BlueCard />
				<WhiteCard />
				<WhiteCard />
				<WhiteCard />
			</div>
		</div>
	);
}

export default LaunchPoolContainer;
