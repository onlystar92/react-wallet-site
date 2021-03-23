import React, { useState } from "react";
import "./Help.css";
import { setHelpTab, selectHelpTab } from "../../slices/slice";
import { useDispatch, useSelector } from "react-redux";

function BottomRightContent({ title, desc, selected }) {
	const [isOpen, setisOpen] = useState(false);
	return (
		<div>
			<div className="d-flex justify-content-between align-items-center ">
				<p
					style={{ color: selected ? "black" : "" }}
					className="bottom-right-title"
				>
					{title}
				</p>
				<i
					onClick={() => {
						setisOpen(!isOpen);
					}}
					style={{
						color: "#53A8F0",
						marginTop: "-1rem",
						transform: isOpen
							? "scale(1.5) rotate(180deg)"
							: "scale(1.5)",
					}}
					class=" fas fa-caret-down"
				></i>
			</div>
			{isOpen && <div className="bottom-right-desc">{desc}</div>}
			<hr className="mt-3" />
		</div>
	);
}

function BottomRight() {
	return (
		<div className="bottom-right">
			<BottomRightContent
				selected={true}
				title="Withdrawal process."
				desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."
			/>
			<BottomRightContent
				title="Is there a minimum or maximum?"
				desc=""
			/>
			<BottomRightContent
				title="Why are withdrawal requests processed manually?"
				desc=""
			/>{" "}
			<BottomRightContent
				title="Are there any withdrawal fees?"
				desc=""
			/>{" "}
			<BottomRightContent title="Can I withdraw any time?" desc="" />
			<BottomRightContent
				title="Can I cancel my withdrawal request?"
				desc=""
			/>
		</div>
	);
}

function BottomLeft() {
	const tab = useSelector(selectHelpTab);

	const dispatch = useDispatch();

	const getActiveClass = (item) => {
		if (item === tab) {
			return "bottom-left-active";
		}
	};
	return (
		<div className="bottom-left">
			<div
				onClick={() => dispatch(setHelpTab("Withdrawals"))}
				className={`mb-5 bottom-left ${getActiveClass("Withdrawals")}`}
			>
				Withdrawals
			</div>
			<div
				onClick={() => dispatch(setHelpTab("Account Details"))}
				className={`mb-5 bottom-left ${getActiveClass(
					"Account Details",
				)}`}
			>
				Account Details
			</div>
			<div
				onClick={() => dispatch(setHelpTab("Deposits"))}
				className={`mb-5 bottom-left ${getActiveClass("Deposits")}`}
			>
				Deposits
			</div>
			<div
				onClick={() => dispatch(setHelpTab("LaunchPool"))}
				className={`mb-5 bottom-left ${getActiveClass("LaunchPool")}`}
			>
				LaunchPool
			</div>
		</div>
	);
}

function HelpBottom() {
	return (
		<div className="help-bottom d-flex">
			<BottomLeft />
			<div className="vertical-line"></div>
			<BottomRight />
		</div>
	);
}

function Help() {
	return (
		<div className="help-container pt-4 pt-md-0">
			<h1 className="help-head">Help</h1>
			<div className="d-flex justify-content-between align-items-center mt-4 mb-3">
				<div className="input-wrapper">
					<i class="fas fa-search"></i>
					<input
						className="help-input"
						placeholder="Search help..."
						type="text"
					/>
				</div>

				{/* <button className="help-search">Search</button> */}
			</div>

			<HelpBottom />
		</div>
	);
}

export default Help;
