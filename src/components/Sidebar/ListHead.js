import React, { useEffect, useState } from "react";
import SubList from "./SubList";
import "./List.css";
import { useDispatch } from "react-redux";
import { setListHeadCollapse } from "../../slices/slice";
import Data from "../../assets/SideBarItems";

function ListHead({ icon, title, items, idx }) {
	const [isOpen, setisOpen] = useState(true);
	const caretStyle = {
		transform: isOpen ? "rotate(180deg)" : "",
		color: "white",
	};
	//const dispatch = useDispatch();

	// useEffect(() => {
	// 	if (!isOpen) {
	// 		dispatch(setListHeadCollapse(idx));
	// 	}
	// }, [isOpen]);

	return (
		<>
			<div
				className="d-flex align-items-center justify-content-between pl-4 pt-3 pr-4 pb-3 listHeadContainer"
				onClick={() => {
					setisOpen(!isOpen);
					Data[idx].show = !isOpen;
				}}
			>
				<div>
					<img src={icon} alt="" />
					<span className="font-weight-bold ml-3 listHeadTitleStyle">
						{title}
					</span>
				</div>

				<i style={caretStyle} class="fas fa-caret-down"></i>
			</div>

			{isOpen && <SubList items={items} />}
		</>
	);
}

export default ListHead;
