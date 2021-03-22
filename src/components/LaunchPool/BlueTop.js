import React from "react";
import Icon from "../../assets/dodo.svg";

function EndDate() {
	return (
		<div className="text-right blue-top-enddate ">
			<div>End date</div>
			2021-02-28
		</div>
	);
}

function BreadCrumb({ title }) {
	return (
		<div className="breadcrumb-wrapper ">
			<div className="bluetop-breadcrumb">{title}</div>
		</div>
	);
}

function BlueTop() {
	return (
		<div className="d-flex mt-4 flex-column justify-content-center align-items-center blue-top">
			<div className="blue-top-head-container">
				<img src={Icon} alt="" />
				<span className=" blue-top-head">DODO (DODO)</span>
				<div className=" blue-top-status">COMPLETED</div>
			</div>
			<p>
				An open, accessible, capital-efficient decentralized exchange
				platform
			</p>
			<div className="mobile-end-date">
				End date : <span>2021-02-28</span>{" "}
			</div>
			<div className="mt-4 breadcrumbs-container">
				<BreadCrumb title="Website" />
				<BreadCrumb title="Whitepaper" />
				<BreadCrumb title="DODO Research Report" />
				<BreadCrumb title="Detailed Rules" />
			</div>
			{/* <EndDate /> */}
		</div>
	);
}

export default BlueTop;
