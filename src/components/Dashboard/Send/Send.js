import React from "react";
import "./styles.css";
import BTC from "../../../assets/btc.svg";

function Dropdown({ title, icon, data }) {
	return (
		<div className="send-dropdown-container mr-3">
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
		<div className="send-input-container mr-3">
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

function Send() {
	return (
		<div className="send-container d-flex flex-column align-items-center">
			<div className="mt-4 d-flex w-100 justify-content-between">
				<Dropdown
					title="Currency"
					icon={BTC}
					data={[{ icon: BTC, content: "Bitcoin" }]}
				/>
				<Input title="Amount" span="BTC" placeholder="$0.00" />
				<Input title="Amount" span="USD" placeholder="$0.00" />
				<Dropdown title="Fee" data={[{ content: "Regular" }]} />
			</div>
			<div className="d-flex justify-content-between align-items-center mt-4 w-100">
				<Dropdown
					title="From"
					data={[{ content: "My Bitcoin Wallet" }]}
				/>
				<Input title="To" placeholder="Select a destination" />
			</div>
			<div className="text-start w-100 mt-4">
				<div className="font-weight-bold mb-3">Description</div>
				<textarea
					className="send-textarea"
					placeholder="Write a transaction description (optional)"
					name=""
					id=""
					cols="30"
					rows="10"
				></textarea>
			</div>
		</div>
	);
}

export default Send;
