import React from "react";
import TransactionHistoryItem from "./TransactionHistoryItem";

const transactionHistoryContainer = {
	width: "24%",
	position: "absolute",
	right: "0",
};
const transactionHistoryHead = { fontSize: "25px", color: "#455A64" };

function TransactionHistory() {
	return (
		<div
			className="mt-4 rounded-3 bg-white ml-4 mr-4 text-left pt-4 pl-4 pr-4"
			style={transactionHistoryContainer}
		>
			<p className="font-weight-bold" style={transactionHistoryHead}>
				Transaction History
			</p>
			<TransactionHistoryItem status="COMPLETED" />
			<TransactionHistoryItem status="CANCELLED" />
			<TransactionHistoryItem status="IN PROGRESS" />
		</div>
	);
}

export default TransactionHistory;
