import React from "react";
import { getClass } from "../helper";
import "./styles.css";
import data from "./data.json";
import { ReactComponent as BitcoinLogo } from "../../assets/btc.svg";

const headersData = [
	{
		title: "#",
		key: "id",
		width: 100,
	},
	{
		title: "Pool",
		key: "pool",
		width: 250,
	},
	{
		title: "Pair",
		key: "pair",
		width: 200,
	},
	{
		title: "Total Value Locked",
		key: "totalValue",
		width: 200,
	},
	{
		title: "Reward Type",
		key: "rewardType",
		width: 200,
	},
	{
		title: "Impermanent Loss",
		key: "loss",
		width: 200,
	},
	{
		title: "APY",
		key: "apy",
		width: 200,
	},
];

const btcLogoStyles = {
	marginRight: 4,
	transform: "scale(0.9)",
};

const TableBodyCell = ({ data, id, width, className }) => {
	if (id === "totalValue") {
		return (
			<div
				style={{ width, margin: "0px 10px" }}
				className={`table-header-cell ${className}`}
			>
				<p className="text-center m-0">
					${data[id].value.toLocaleString()}
				</p>
				<span
					className="text-right d-block"
					style={{ fontSize: 12, color: "grey" }}
				>
					{data[id].percentage}% out of total
				</span>
			</div>
		);
	} else if (id === "rewardType") {
		return (
			<div
				style={{ width, margin: "0px 10px" }}
				className={`table-header-cell d-flex flex-wrap justify-content-center ${className}`}
			>
				{data[id].map((d) => (
					<p
						className="m-0 p-1 pl-3 pr-3"
						style={{
							backgroundColor: "rgba(0,0,0,0.15)",
							width: "fit-content",
							fontSize: 14,
							borderRadius: 4,
							height: "fit-content",
						}}
					>
						<BitcoinLogo style={btcLogoStyles} /> {d}
					</p>
				))}
			</div>
		);
	} else if (id === "apy") {
		return (
			<div
				style={{ width, margin: "0px 10px" }}
				className={`table-header-cell ${className}`}
			>
				<p className="text-center m-0">{data[id].yearly}% Yearly</p>
				<span
					className="text-left d-block"
					style={{ fontSize: 12, color: "grey" }}
				>
					{data[id].daily}% Daily
				</span>
			</div>
		);
	} else if (id === "loss") {
		return (
			<div
				style={{ width, margin: "0px 10px" }}
				className={`table-header-cell d-flex flex-wrap justify-content-center ${className}`}
			>
				<p
					className="m-0 p-1 pl-3 pr-3"
					style={{
						backgroundColor: "rgba(0,0,0,0.15)",
						width: "fit-content",
						fontSize: 14,
						borderRadius: 4,
						height: "fit-content",
					}}
				>
					{data[id]}
				</p>
			</div>
		);
	} else if (id === "pool") {
		return (
			<p
				style={{
					width,
					margin: "0px 10px",
					color: id === "pair" ? "blue" : "initial",
				}}
				className={`text-center table-header-cell ${className}`}
			>
				<BitcoinLogo style={btcLogoStyles} /> {data[id]}
			</p>
		);
	}
	return (
		<p
			style={{
				width,
				margin: "0px 10px",
				color: id === "pair" ? "blue" : "initial",
			}}
			className={`text-center table-header-cell ${className}`}
		>
			{data[id]}
		</p>
	);
};

const YieldFarmingTable = () => {
	return (
		<table className="yield-farming-table">
			<tr className="w-100 d-flex justify-content-between p-3 table-header">
				{headersData.map((h) => (
					<th
						key={h.key}
						style={{ width: h.width, margin: "0px 10px" }}
						className={`text-center table-header-cell ${h.className}`}
					>
						{h.title}
					</th>
				))}
			</tr>
			<div className="table-body">
				{data.data.map((d) => (
					<tr className="w-100 d-flex justify-content-between align-items-center p-3 table-row">
						{headersData.map((h) => {
							return (
								<td>
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
	);
};

function YieldFarming({ isOpen, subOpen }) {
	return (
		<div
			className={`mt-4`}
			style={{
				height: "fit-content",
				padding: "2rem",
				width: "calc(100% - 350px)",
			}}
		>
			<h1 className="text-left font-weight-bold heading">
				Yield Farming
			</h1>
			<div
				style={{
					overflow: "auto",
					backgroundColor: "#fff",
					padding: "1rem",
				}}
			>
				<YieldFarmingTable />
			</div>
		</div>
	);
}

// ${getClass({ isOpen, subOpen })}

export default YieldFarming;
