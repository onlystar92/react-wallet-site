import React, { useState } from "react";
import List from "./SubSubList";
import { setDesc, setTitle, setIcon } from "../../slices/slice";
import { useDispatch } from "react-redux";
import "./List.css";

function SubList({ items }) {
	const [isOpen, setisOpen] = useState(
		Array.apply(null, Array(items.length)).map(function (x, i) {
			return true;
		}),
	);

	const dispatch = useDispatch();

	return (
		<>
			{items.map((item, idx) => (
				<>
					<button
						className="d-flex justify-content-between align-items-center pl-4 pt-2 pr-4 pb-2 sub-active pointer"
						onClick={() => {
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
