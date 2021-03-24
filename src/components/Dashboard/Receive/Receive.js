import React from "react";
import "./styles.css";
import BTC from "../../../assets/btc.svg";
import QR from "../../../assets/QR-Code.png";

function Dropdown({ title, icon, data }) {
	return (
		<div className="send-dropdown-container ml-1 mr-1">
			<div className="send-dropdown-label mb-2">{title}</div>
			<div class="dropdown">
				<button
					class="text-left d-flex justify-content-between align-items-center pr-4  send-dropdown dropdown-toggle"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false"
				>
					<div className="d-flex align-items-center">
						{icon && <img className="mr-3" src={icon} alt="" />}
						{data[0].content}
					</div>

					<i class="fas fa-caret-down caret-dropdown"></i>
				</button>
				<div
					class="dropdown-menu send-dropdown-select"
					aria-labelledby="dropdownMenuButton"
				>
					{data.map((x) => (
						<a class="dropdown-item" href="#">
							<div className="d-flex align-items-center">
								{x.icon && (
									<img className="mr-3" src={x.icon} alt="" />
								)}
								{x.content}
							</div>
						</a>
					))}
				</div>
			</div>
		</div>
	);
}

function Input({ title, span, placeholder }) {
	return (
		<div className="send-input-container ml-1 mr-1">
			<div className="send-dropdown-label mb-2">{title}</div>
			<input
				className="send-input"
				placeholder={placeholder}
				type="text"
			/>
			{span && <span>{span}</span>}
		</div>
	);
}

function Receive() {
	return (
		<div className="receive-container d-flex flex-column align-items-center">
			<div className="mt-4 d-flex w-100 justify-content-between">
				<Dropdown
					title="Currency"
					icon={BTC}
					data={[{ icon: BTC, content: "Bitcoin" }]}
				/>
				<Input title="Receive To" placeholder="My Bitcoin Wallet" />
			</div>
			<img className="mt-4" src={QR} alt="" />
			<div className="d-flex align-items-end w-100 mt-4">
				<Input
					title="Address"
					placeholder="fh5uTiDDekgGhBslmp23ahDYumH5h6Ua4o"
				/>
				<span className="copy-span">
					<i class="far fa-copy"></i>
				</span>
			</div>
			<button className="receive-btn mt-4">Continue</button>
		</div>
	);
}

export default Receive;
