import React from "react";
import BlueCard from "./BlueCard";
import "./LaunchPool.css";
import WhiteCard from "./WhiteCard";

function LaunchPoolContainer() {
	return (
		<div className="text-left pl-md-4 pt-md-4 launch-pool-container">
			<h1 className="font-weight-bold launch-pool-heading">
				Launch Pool
			</h1>
			<div className=" cards-wrapper">
				<BlueCard />
				<WhiteCard />
				<WhiteCard />
				<WhiteCard />
			</div>
			<div className=" cards-wrapper">
				<BlueCard />
				<WhiteCard />
				<WhiteCard />
				<WhiteCard />
			</div>
			<div className=" cards-wrapper">
				<BlueCard />
				<WhiteCard />
				<WhiteCard />
				<WhiteCard />
			</div>
		</div>
	);
}

export default LaunchPoolContainer;
