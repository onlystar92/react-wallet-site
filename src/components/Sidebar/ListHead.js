import React, { useState } from "react";
import SubList from "./SubList";

function ListHead({
	icon,
	title,
	items,
	setCounter1,
	setCounter2,
	setCounter3,
	idx,
}) {
	const [isOpen, setisOpen] = useState(true);

	const listHeadContainer = { cursor: "pointer", backgroundColor: "#526DAA" };
	const titleStyle = { color: "white", fontSize: "16px" };
	const caretStyle = {
		transform: isOpen ? "rotate(180deg)" : "",
		color: "white",
	};

	return (
		<>
			<div
				className="d-flex align-items-center justify-content-between pl-4 pt-3 pr-4 pb-3"
				style={listHeadContainer}
				onClick={() => {
					setisOpen(!isOpen);
					setCounter1(idx);
				}}
			>
				<div>
					<img src={icon} alt="" />
					<span className="font-weight-bold ml-3" style={titleStyle}>
						{title}
					</span>
				</div>

				<i style={caretStyle} class="fas fa-caret-down"></i>
			</div>

			{isOpen && (
				<SubList
					items={items}
					setCounter2={setCounter2}
					setCounter3={setCounter3}
				/>
			)}
		</>
	);
}

export default ListHead;
