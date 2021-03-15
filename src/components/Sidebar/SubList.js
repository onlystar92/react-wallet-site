import React, { useState } from "react";
import List from "./SubSubList";
import {
	setDesc,
	setTitle,
	selectSidebar,
	setSidebarActive,
	setSubListShow,
} from "../../slices/slice";
import { useDispatch, useSelector } from "react-redux";
import "./List.css";

function SubList({ items, idx1 }) {
	const sidebarActive = useSelector(selectSidebar);
	// const [isOpen, setisOpen] = useState(
	// 	Array.apply(null, Array(items.length)).map(function (x, i) {
	// 		return true;
	// 	}),
	// );
	const [isOpen, setisOpen] = useState(true);

	console.log("active arr", isOpen);

	const dispatch = useDispatch();

	const getActive = (item) => {
		if (sidebarActive === item.id) {
			return "sub-menu-active";
		}
	};

	return (
		<>
			{items.map((item, idx) => (
				<>
					<button
						className={`d-flex justify-content-between align-items-center pl-4 pt-1 pr-4 pb-1 sub-active pointer ${getActive(
							item,
						)}`}
						onClick={() => {
							dispatch(setSidebarActive(item.id));
							dispatch(setTitle(item.title));
							dispatch(setDesc(item.description));
							setisOpen(!isOpen);

							dispatch(
								setSubListShow({
									idx1: idx1,
									idx2: idx,
									flag: !isOpen,
								}),
							);
							// setisOpen(
							// 	isOpen.map((item, i) =>
							// 		i === idx ? !item : item,
							// 	),
							// );
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

						{item.items && (
							<i
								style={
									item.show
										? {
												transform: "rotate(180deg)",
												color: "#53A8F0",
										  }
										: {
												color: "#53A8F0",
										  }
								}
								class="fas fa-caret-down"
							></i>
						)}
					</button>

					{item.show && <List items={item.items} />}
				</>
			))}
		</>
	);
}

export default SubList;
