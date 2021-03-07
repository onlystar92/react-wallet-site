import React, { useState } from "react";
import List from "./SubSubList";
import { setDesc, setTitle, setIcon } from "../../slices/slice";
import { useDispatch } from "react-redux";

function SubList({ items }) {
	const [isOpen, setisOpen] = useState(
		Array.apply(null, Array(items.length)).map(function (x, i) {
			return true;
		}),
	);

	const dispatch = useDispatch();

	const icon = { width: "20px", height: "20px" };
	const title = { fontSize: "12px", color: "#4C566C" };
	const desc = { fontSize: "12px", color: "#A7ABB6" };

	return (
		<>
			{items.map((item, idx) => (
				<>
					<div
						className="d-flex justify-content-between align-items-center pl-4 pt-2 pr-4 pb-2"
						style={{ cursor: "pointer" }}
						onClick={() => {
							dispatch(setTitle(item.title));
							dispatch(setDesc(item.desc));
							dispatch(setIcon(item.icon));
							// localStorage.setItem("icon", item.icon);
							// localStorage.setItem("title", item.title);
							// localStorage.setItem("desc", item.description);
							setisOpen(
								isOpen.map((item, i) =>
									i === idx ? !item : item,
								),
							);
						}}
					>
						<div>
							{item.icon ? (
								<img style={icon} src={item.icon} alt="" />
							) : (
								<div style={icon}></div>
							)}
							<span className="ml-3" style={title}>
								{item.title}
							</span>
							<span className="ml-3" style={desc}>
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
					</div>

					{isOpen[idx] && <List items={item.items} />}
				</>
			))}
		</>
	);
}

export default SubList;
