import React from "react";
import "./LaunchPool.css";
import BNBGrey from "../../assets/bnb-grey.svg";
import DODO from "../../assets/dodo.svg";

function TopCard({ head, value, span, icon }) {
	return (
		<div class="col-sm mb-3">
			<div className="grey-bottom-topcard-head">{head}</div>
			<div>
				{icon && <img className="mb-3 mr-1" src={icon} alt="" />}

				<span className="grey-bottom-topcard-value">{value}</span>
				{span && (
					<span className="grey-bottom-topcard-span">{span}</span>
				)}
			</div>
		</div>
	);
}

function BottomCard({ icon, head, sub, value, span, para, span2 }) {
	return (
		<div className="d-flex flex-column justify-content-center align-items-center bottom-card col-sm">
			<img className="bottom-card-icon" src={icon} alt="" />
			<div className="bottom-card-head">{head}</div>
			<div className="bottom-card-sub">{sub}</div>
			<div>
				<span className="bottom-card-value">{value}</span>
				<span className="bottom-card-span">{span}</span>
			</div>
			<span>{para}</span>
			<a href={span2}>{span2}</a>
		</div>
	);
}

function GreyBottom() {
	return (
		<div className="grey-bottom">
			<div class="container">
				<div class="row">
					<TopCard
						head="Total BNB Pool Rewards"
						value="641,710.8000"
						span="DODO"
					/>
					<TopCard head="Staking Token" value="BNB" icon={BNBGrey} />
					<TopCard head="Farming Period" value="14" span="Days" />
				</div>
				<div class="row mt-0 mt-mb-5">
					<TopCard
						head="Today’s DODO Pool Rewards"
						value="34,554.0000"
						span="DODO"
					/>
					<TopCard
						head="Total BNB Staked"
						value="8,361,393.9477"
						span="BNB"
					/>
					<TopCard
						head="Annual Percentage Yield"
						value="1.62"
						span="%"
					/>
				</div>
			</div>
			<div className="mt-3 mt-mb-5 row">
				<BottomCard
					icon={BNBGrey}
					head="My Funds"
					sub="BNB Stacked"
					value="532.8963"
					span="BNB"
					para="Your staked BNB has been automatically transferred back to your spot account"
				/>
				<BottomCard
					icon={DODO}
					head="My Rewards"
					sub="Total Rewards Received"
					value="872.4578"
					span="DODO"
					para="Your rewards have been sent to your "
					span2="spot account"
				/>
			</div>
		</div>
	);
}

export default GreyBottom;
