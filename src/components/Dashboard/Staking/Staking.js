import React from "react";
import DODO from "../../../assets/dodo.svg";
import "./styles.css";

function StakingCard({ APY, title, value, stake, total, icon, curr }) {
	return (
		<div className="p-2 col-sm-3 col-12">
			<div className=" staking-card d-flex flex-column align-items-start justify-content-between">
				<img src={icon} alt="" />
				<div className="font-weight-bold mt-3">{title}</div>
				<div className="staking-card-top mt-3">
					<span className="font-weight-bold top-value">{value}</span>
					<span className="ml-2 top-desc">{curr} earned</span>
				</div>
				<hr />
				<div className="w-100 d-flex justify-content-between mb-2">
					<span className="staking-bottom-left">APY:</span>
					<span className="staking-bottom-right">{APY}</span>
				</div>
				<div className="w-100 d-flex justify-content-between mb-2">
					<span className="staking-bottom-left">Your Stake:</span>
					<span className="staking-bottom-right">{stake}</span>
				</div>
				<div className="w-100 d-flex justify-content-between mb-2">
					<span className="staking-bottom-left">Total:</span>
					<span className="staking-bottom-right">
						{total} {curr}
					</span>
				</div>
				<button className="staking-btn mt-3">Unlock Wallet</button>
			</div>
		</div>
	);
}

function Staking() {
	return (
		<div className="staking-container ">
			<div className="row gx-5">
				<StakingCard
					APY="122.15%"
					title="DODO POOL"
					value="49.4136"
					stake="58.5615"
					total="1,069.4586"
					icon={DODO}
					curr="DODO"
				/>
				<StakingCard
					APY="122.15%"
					title="DODO POOL"
					value="49.4136"
					stake="58.5615"
					total="1,069.4586"
					icon={DODO}
					curr="DODO"
				/>
				<StakingCard
					APY="122.15%"
					title="DODO POOL"
					value="49.4136"
					stake="58.5615"
					total="1,069.4586"
					icon={DODO}
					curr="DODO"
				/>
				<StakingCard
					APY="122.15%"
					title="DODO POOL"
					value="49.4136"
					stake="58.5615"
					total="1,069.4586"
					icon={DODO}
					curr="DODO"
				/>
			</div>
		</div>
	);
}

export default Staking;
