import React, { useState } from "react";
import "./List.css";
import Caret from "../../assets/caret.png";
import SubList from "./SubList";

function ListHead({ icon, title, items }) {
	const [isOpen, setisOpen] = useState(false);

	return (
		<>
			<div className="list-head" onClick={() => setisOpen(!isOpen)}>
				<img src={icon} alt="" />
				<p className="list-title">{title}</p>
				<img
					className="caret"
					src={Caret}
					alt=""
					style={!isOpen ? { transform: "rotate(180deg)" } : {}}
				/>
			</div>
			{isOpen && <SubList items={items} />}
		</>
	);
}

export default ListHead;
