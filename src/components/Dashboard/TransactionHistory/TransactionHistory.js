import React from "react";
import data from "./data.json";
import btcLogo from "../../../assets/btc.svg";
import ethLogo from "../../../assets/ETH.png";
import ltcLogo from "../../../assets/ltc.svg";
import bchLogo from "../../../assets/bch.svg";
import { useMediaQuery } from "react-responsive";

const AssetCell = ({ text }) => {
	let image = (
		<img
			src={
				text === "BTC"
					? btcLogo
					: text === "ETH"
					? ethLogo
					: text === "LTC"
					? ltcLogo
					: bchLogo
			}
			alt="Asset"
			className="mr-2"
		/>
	);
	return (
		<p className="mb-0 d-flex align-items-center">
			{image} {text}
		</p>
	);
};

const StatusCell = ({ text }) => {
	var style = {
		borderRadius: "11px",
		height: "38px",
		color:
			text === "IN PROGRESS"
				? "#B33BC3"
				: text === "CANCELLED"
				? "#FF3131"
				: text === "COMPLETED" && "#A8C33B",
		backgroundColor:
			text === "IN PROGRESS"
				? "#F1F2FA"
				: text === "CANCELLED"
				? "#FFE3E3"
				: text === "COMPLETED" && "#EAFDEA",
	};
	return (
		<div
			style={style}
			className="d-flex pl-3 pr-3 font-weight-bold justify-content-center align-items-center"
		>
			{text}
		</div>
	);
};

const TableBodyCell = ({ data, id }) => {
	if (id === "asset") {
		return (
			<div className="asset-cell">
				<AssetCell text={data[id]} />
			</div>
		);
	}

	if (id === "status") {
		return (
			<div className="asset-cell">
				{" "}
				<StatusCell text={data[id]} />{" "}
			</div>
		);
	}

	return <p className="mb-0">{data[id]}</p>;
};

const TransactionHistoryTable = () => {
	const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

	//can also add custom className
	const headersData = [
		{
			title: "Date",
			key: "date",
			width: isMobile ? 120 : "15%",
		},
		{
			title: "Asset",
			key: "asset",
			width: isMobile ? 120 : "15%",
		},
		{
			title: "Adress",
			key: "address",
			width: isMobile ? 340 : "35%",
		},
		{
			title: "Value",
			key: "value",
			width: isMobile ? 140 : "20%",
		},
		{
			title: "Status",
			key: "status",
			width: "15%" /*change width in ActionCell as well*/,
		},
	];

	return (
		<div
			className={`ml-sm-4 pt-sm-4 overflow-auto w-100 address-book-container`}
		>
			<table className="w-100 address-book-table">
				<tr className="w-100 d-flex p-4 table-header">
					{headersData.map((h) => (
						<th
							key={h.key}
							style={{
								width: h.width,
							}}
							className={`table-header-cell text-left ${h.className}`}
						>
							{h.title}
						</th>
					))}
				</tr>
				<div className="mr-3 table-body">
					{data.data.map((d) => (
						<tr className="w-100 d-flex p-4 table-row ">
							{headersData.map((h) => {
								return (
									<td
										style={{
											width: h.width,
										}}
										className={`d-flex align-items-center text-left table-body-cell ${h.className}`}
									>
										<TableBodyCell
											key={h.key}
											data={d}
											{...h}
											id={h.key}
										/>
									</td>
								);
							})}
						</tr>
					))}
				</div>
			</table>
		</div>
	);
};

export default TransactionHistoryTable;
