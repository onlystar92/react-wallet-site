import React, { useState } from "react";
import List from "./SubSubList";
import {
	setDesc,
	setTitle,
	selectSidebar,
	setSidebarActive,
} from "../../slices/slice";
import { useDispatch, useSelector } from "react-redux";
import "./List.css";

function SubList({ items }) {
	const sidebarActive = useSelector(selectSidebar);
	const [isOpen, setisOpen] = useState(
		Array.apply(null, Array(items.length)).map(function (x, i) {
			return true;
		}),
	);

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
						className={`d-flex justify-content-between align-items-center pl-4 pt-2 pr-4 pb-2 sub-active pointer ${getActive(
							item,
						)}`}
						onClick={() => {
							localStorage.setItem("id", item.id);
							dispatch(setSidebarActive(item.id));
							dispatch(setTitle(item.title));
							dispatch(setDesc(item.description));
							setisOpen(
								isOpen.map((item, i) =>
									i === idx ? !item : item,
								),
							);
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
									isOpen[idx]
										? {
												transform: "rotate(180deg)",
												color: "#526DAA",
										  }
										: {
												color: "#526DAA",
										  }
								}
								class="fas fa-caret-down"
							></i>
						)}
					</button>

					{isOpen[idx] && <List items={item.items} />}
				</>
			))}
		</>
	);
}

export default SubList;
