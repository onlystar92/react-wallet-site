import React, { useState } from "react";
import "./List.css";
import Caret from "../../assets/caret.png";
import List from "./SubSubList";

function SubList({ items, idx }) {
	const [isOpen, setisOpen] = useState(
		Array.apply(null, Array(items.length)).map(function (x, i) {
			return false;
		}),
	);

	console.log("isopne", isOpen);
	console.log("items", items);

	return (
		<>
			<div className="sublist">
				{items.map((item, idx) => (
					<>
						<div className="sublist-item"
							onClick={() =>
								setisOpen(
									isOpen.map((item, i) =>
										i === idx ? !item : item,
									),
								)
							}
						>
							{item.icon ? (
								<img src={item.icon} alt="" />
							) : (
									<div
										style={{ width: "20px", height: "20px" }}
									></div>
								)}
							<span className="item-title">{item.title}</span>
							<span className="item-desc">
								{item.description}
								{item.items && (
									<img
										className="caret"
										src={Caret}
										alt=""
										style={
											!isOpen[idx]
												? {
													transform:
														"rotate(180deg)",
												}
												: {}
										}
									/>
								)}
							</span>
						</div>
						{isOpen[idx] && (
							<List
								items={item.items}
								idx={idx}
								length={items.length}
							/>
						)}
					</>
				))}
			</div>
		</>
	);
}

export default SubList;
