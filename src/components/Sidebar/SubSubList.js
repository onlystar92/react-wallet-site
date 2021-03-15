import React from "react";
import {
	setDesc,
	setTitle,
	selectSidebar,
	setSidebarActive,
	setIcon,
} from "../../slices/slice";
import { useDispatch, useSelector } from "react-redux";
import "./List.css";

function SubSubList({ items }) {
	const dispatch = useDispatch();
	const sidebarActive = useSelector(selectSidebar);

	const getActive = (item) => {
		if (sidebarActive === item.id) {
			return "sub-menu-active";
		}
	};

	return (
		<>
			{items &&
				items.map((item, idx) => (
					<button
						className={`d-flex justify-content-between align-items-center pl-5 pt-1 pr-4 pb-1 sub-active pointer ${getActive(
							item,
						)}`}
						onClick={() => {
							dispatch(setSidebarActive(item.id));

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
