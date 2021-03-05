import React, { useState } from "react";
import "./List.css";
import Caret from "../../assets/caret.png";
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
	const [isOpen, setisOpen] = useState(false);

	return (
		<>
			<div
				className="list-head"
				onClick={() => {
					setisOpen(!isOpen);
					setCounter1(idx);
				}}
			>
				<img src={icon} alt="" />
				<p className="list-title">{title}</p>
				<img
					className="caret"
					src={Caret}
					alt=""
					style={!isOpen ? { transform: "rotate(180deg)" } : {}}
					// onClick={() => setisOpen(!isOpen)}
				/>
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
