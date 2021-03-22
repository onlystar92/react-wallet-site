import React from "react";
import "./styles.css";

function DropLocation({ head }) {
	return (
		<div
			className={`flex-column ${
				head === "ID Document"
					? "panel-drop-location "
					: "panel-drop-location2"
			} d-flex justify-content-center align-items-center`}
		>
			<i class="far fa-image gallery-icon mb-3"></i>
			<div className="drop-location-title mb-2">Front Side</div>
			<button className="panel-upload-btn">Upload</button>
		</div>
	);
}

function DragArea({ head }) {
	return (
		<div className="panel-drag-area mb-sm-5 mb-4">
			{head === "ID Document" ? (
				<>
					<DropLocation head="ID Document" />
					<DropLocation head="ID Document" />
				</>
			) : (
				<DropLocation />
			)}
		</div>
	);
}

function RadioSelection({ label }) {
	return (
		<div className="mb-sm-4 mb-3">
			<input className="panel-radio" type="radio" name="" id="" />
			<label className="panel-radio-label ml-3" htmlFor="">
				{label}
			</label>
		</div>
	);
}

function Panel({ head, desc }) {
	return (
		<div className="panel-wrapper">
			<div className="panel-head">{head}</div>
			<div className="panel-desc mt-3">{desc}</div>
			{head === "ID Document" ? (
				<>
					<RadioSelection label="National ID Card" />
					<DragArea head="ID Document" />
					<RadioSelection label="Passport" />
					<RadioSelection label="Drivers License" />
				</>
			) : (
				<>
					<RadioSelection label="Bank Statement" />
					<DragArea />
					<RadioSelection label="Utility Bill" />
				</>
			)}
		</div>
	);
}

function KYC() {
	return (
		<div className="kyc-container">
			<Panel
				head="ID Document"
				desc="Please choose a valid government issued picture identification document."
			/>
			<Panel
				head="Proof of Adress"
				desc="Please choose a bank statement or utility bill which will serve as proof of address."
			/>
		</div>
	);
}

export default KYC;
