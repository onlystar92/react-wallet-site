import React from "react";

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
		height: "47px",
		borderRadius: "11px",
		fontSize: "16px",
		color:
			status === "COMPLETED"
				? "#A8C33B"
				: status === "CANCELLED"
				? "#FF3131"
				: status === "IN PROGRESS"
				? "#B33BC3"
				: "",
	};

	const titleStyle = { color: "#526DAA", fontSize: "20px" };
	const subTitleStyle = { color: "#FF3131", fontSize: "20px" };
	const descriptionStyle = { color: "#1D2943", fontSize: "16px" };

	return (
		<div className="d-flex justify-content-between align-items-center mb-4">
			<div>
				<div className="font-weight-bold mb-1" style={titleStyle}>
					0x7…b78707
				</div>
				<div className="font-weight-bold mb-1" style={subTitleStyle}>
					-0.24 ETH
				</div>
				<div className="mb-1" style={descriptionStyle}>
					3 Days Ago
				</div>
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
