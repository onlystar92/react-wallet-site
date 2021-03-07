import React from "react";
import { setDesc, setTitle, setIcon } from "../../slices/slice";
import { useDispatch } from "react-redux";
import "./List.css";

function SubSubList({ items }) {
	const dispatch = useDispatch();

	return (
		<>
			{items &&
				items.map((item, idx) => (
					<button
						className="d-flex justify-content-between align-items-center pl-5 pt-2 pr-4 pb-2 sub-active"
						style={{ cursor: "pointer" }}
						onClick={() => {
							dispatch(setTitle(item.title));
							dispatch(setDesc(item.description));
							dispatch(setIcon(item.icon));
						}}
					>
						<div>
							{item.icon ? (
								<img className="icon" src={item.icon} alt="" />
							) : (
								<div className="icon"></div>
							)}
							<span className="ml-3 title">{item.title}</span>
							<span className="ml-3 desc">
								{item.description}
							</span>
						</div>
					</button>
				))}
		</>
	);
}

export default SubSubList;
