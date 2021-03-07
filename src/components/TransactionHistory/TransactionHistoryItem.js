import React from "react";
import "./TransactionHistory.css";

function TransactionHistoryItem({ status }) {
	const statusStyle = {
		backgroundColor:
			status === "COMPLETED"
				? "#50BA5014"
				: status === "CANCELLED"
				? "#FF313122"
				: status === "IN PROGRESS"
				? "#505CBA14"
				: "",
		width: "134px",
		height: "39px",
		borderRadius: "11px",
		fontSize: "14px",
		color:
			status === "COMPLETED"
				? "#A8C33B"
				: status === "CANCELLED"
				? "#FF3131"
				: status === "IN PROGRESS"
				? "#B33BC3"
				: "",
	};

	return (
		<div className="d-flex justify-content-between  mb-4">
			<div>
				<div className="font-weight-bold mb-1 titleStyle">
					0x7…b78707
				</div>
				<div className="font-weight-bold mb-1 subTitleStyle">
					-0.24 ETH
				</div>
				<div className="mb-1 descriptionStyle">3 Days Ago</div>
			</div>
			<div
				className="d-flex justify-content-center align-items-center font-weight-bold"
				style={statusStyle}
			>
				{status}
			</div>
		</div>
	);
}

export default TransactionHistoryItem;
