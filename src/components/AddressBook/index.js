import React from "react";
import "./styles.css";
import data from "./data.json";
import btcLogo from "../../assets/btc.svg";
import ethLogo from "../../assets/ETH.png";
import ltcLogo from "../../assets/ltc.svg";
import bchLogo from "../../assets/bch.svg";
import { ReactComponent as EditLogo } from "../../assets/edit.svg";
import { ReactComponent as DeleteLogo } from "../../assets/delete.svg";

//can also add custom className
const headersData = [
	{
		title: "Asset",
		key: "asset",
		width: "10%",
	},
	{
		title: "Nickname",
		key: "nickname",
		width: "20%",
	},
	{
		title: "Adress",
		key: "address",
		width: "40%",
	},
	{
		title: "Date Added",
		key: "date",
		width: "20%",
	},
	{
		title: "Actions",
		key: "actions",
		width: "10%" /*change width in ActionCell as well*/,
	},
];

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
			{image}
			{text}
		</p>
	);
};

const ActionCell = () => {
	return (
		<span className="d-flex action-cell">
			<EditLogo className="action-logo" />
			<DeleteLogo className="action-logo" />
			{/* <img src={editLogo} alt="Edit" />
      <img src={deleteLogo} alt="Delete" /> */}
		</span>
	);
};

const TableBodyCell = ({ data, id }) => {
	if (id === "asset") {
		return (
			<div className="asset-cell">
				<AssetCell text={data[id]} />
			</div>
		);
	} else if (id === "actions") {
		return <ActionCell />;
	}
	return <p className="mb-0">{data[id]}</p>;
};

const AddressBookTable = () => {
	return (
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
									className={`text-left table-body-cell ${h.className}`}
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
	);
};

function AddressBook() {
	return (
		<div className={`ml-4 pt-4 overflow-auto w-100 address-book-container`}>
			<h1 className="text-left font-weight-bold heading">Address Book</h1>
			<div className="mt-4 overflow-auto bg-white p-3 w-100 addressBookContainer">
				<AddressBookTable />
			</div>
		</div>
	);
}

//address-book

export default AddressBook;
