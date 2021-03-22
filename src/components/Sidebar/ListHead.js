import React, { useEffect, useState } from "react";
import SubList from "./SubList";
import "./List.css";
import { useDispatch, useSelector } from "react-redux";
import { setData, selectData, setListHeadShow } from "../../slices/slice";
import { NavLink } from "react-router-dom";

function ListHead({ icon, title, items, idx, url }) {
	const [isOpen, setisOpen] = useState(true);
	const data = useSelector(selectData);

	const caretStyle = {
		transform: isOpen ? "rotate(180deg)" : "",
		color: "white",
	};
	const dispatch = useDispatch();

	return (
		<>
			<div className="d-flex align-items-center justify-content-between pl-2  pr-4  listHeadContainer">
				<NavLink className="nav-link" to={url}>
					<div>
						<img className="headIcon" src={icon} alt="" />
						<span className="font-weight-bold ml-3 listHeadTitleStyle">
							{title}
						</span>
					</div>
				</NavLink>

				<i
					onClick={() => {
						setisOpen(!isOpen);
						dispatch(setListHeadShow({ idx: idx, flag: !isOpen }));
					}}
					style={caretStyle}
					class="fas fa-caret-down "
				></i>
			</div>

			{data[idx].show && <SubList items={items} idx1={idx} />}
		</>
	);
}

export default ListHead;
