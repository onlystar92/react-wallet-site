import React from "react";
import "./Airdrops.css";

function AirdropCard({
	icon,
	status,
	head,
	desc,
	end,
	rewards,
	twitter,
	mail,
	telegram,
	color,
}) {
	return (
		<div className="col airdrop-card-container">
			<div className="d-flex justify-content-between align-items-center">
				<img src={icon} alt="" />
				<div className="d-flex align-items-center ">
					<div
						style={{
							marginRight: "0.5rem",
							borderRadius: "50%",
							height: "5px",
							width: "5px",
							backgroundColor: color,
						}}
					></div>
					<span
						className="font-weight-bold"
						style={{ color: color, fontSize: "14px" }}
					>
						{status}
					</span>
				</div>
			</div>
			<h1 className="airdrop-card-head">{head}</h1>
			<p className="airdrop-card-para">{desc}</p>
			<div className="airdrop-card-line"></div>
			<div className="d-flex justify-content-between align-items-center">
				<div className="airdrop-card-bottom">
					End Date
					<div>{end}</div>
				</div>
				<div className="airdrop-card-bottom">
					Rewards
					<div>≈ ${rewards}</div>
				</div>
				<div className="airdrop-card-bottom">
					Requirements
					<div className="card-bottom-requirements">
						{twitter && <i class="fab fa-twitter"></i>}
						{mail && <i class="fas fa-envelope"></i>}
						{telegram && <i class="fas fa-paper-plane"></i>}
					</div>
				</div>
			</div>
		</div>
	);
}

function Airdrops() {
	return (
		<div className="pl-4 pt-4 airdrop-container">
			<h1 className="airdrop-head">Airdrops</h1>
			<div className="row  mt-3">
				<AirdropCard
					icon=""
					status="Active"
					head="SwissBorg"
					desc="The community is one of the key values of SwissBorg. We were growing rapidly and constantly and that’s all thanks to your support."
					end="31-03-2021"
					rewards="10.5"
					twitter
					mail
					telegram
					color="#A8C33B"
				/>
				<AirdropCard
					icon=""
					status="Active"
					head="SwissBorg"
					desc="The community is one of the key values of SwissBorg. We were growing rapidly and constantly and that’s all thanks to your support."
					end="31-03-2021"
					rewards="10.5"
					twitter
					mail
					telegram
					color="#A8C33B"
				/>
				<AirdropCard
					icon=""
					status="Active"
					head="SwissBorg"
					desc="The community is one of the key values of SwissBorg. We were growing rapidly and constantly and that’s all thanks to your support."
					end="31-03-2021"
					rewards="10.5"
					twitter
					mail
					telegram
					color="#A8C33B"
				/>
				<AirdropCard
					icon=""
					status="Active"
					head="SwissBorg"
					desc="The community is one of the key values of SwissBorg. We were growing rapidly and constantly and that’s all thanks to your support."
					end="31-03-2021"
					rewards="10.5"
					twitter
					mail
					telegram
					color="#A8C33B"
				/>
			</div>
			<div className="row mt-3">
				<AirdropCard
					icon=""
					status="Active"
					head="SwissBorg"
					desc="The community is one of the key values of SwissBorg. We were growing rapidly and constantly and that’s all thanks to your support."
					end="31-03-2021"
					rewards="10.5"
					twitter
					mail
					telegram
					color="#A8C33B"
				/>
				<AirdropCard
					icon=""
					status="Active"
					head="SwissBorg"
					desc="The community is one of the key values of SwissBorg. We were growing rapidly and constantly and that’s all thanks to your support."
					end="31-03-2021"
					rewards="10.5"
					twitter
					mail
					telegram
					color="#A8C33B"
				/>
				<AirdropCard
					icon=""
					status="Active"
					head="SwissBorg"
					desc="The community is one of the key values of SwissBorg. We were growing rapidly and constantly and that’s all thanks to your support."
					end="31-03-2021"
					rewards="10.5"
					twitter
					mail
					telegram
					color="#A8C33B"
				/>
				<div className="col"></div>
			</div>
		</div>
	);
}

export default Airdrops;
