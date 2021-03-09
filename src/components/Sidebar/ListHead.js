import React, { useEffect, useState } from "react";
import SubList from "./SubList";
import "./List.css";
import { useDispatch, useSelector } from "react-redux";
import { setData, selectData, setListHeadShow } from "../../slices/slice";

function ListHead({ icon, title, items, idx }) {
	const [isOpen, setisOpen] = useState(true);
	const data = useSelector(selectData);

	const caretStyle = {
		transform: isOpen ? "rotate(180deg)" : "",
		color: "white",
	};
	const dispatch = useDispatch();

	return (
		<>
			<div
				className="d-flex align-items-center justify-content-between pl-4 pt-3 pr-4 pb-3 listHeadContainer"
				onClick={() => {
					setisOpen(!isOpen);
					dispatch(setListHeadShow({ idx: idx, flag: !isOpen }));
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

			{data[idx].show && <SubList items={items} idx1={idx} />}
		</>
	);
}

export default ListHead;
