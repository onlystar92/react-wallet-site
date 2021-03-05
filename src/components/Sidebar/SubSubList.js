import React from "react";
import "./List.css";

function SubSubList({ items, setCounter3 }) {
	return (
		<>
			<div className="subsublist">
				{items &&
					items.map((item, idx) => (
						<div
							className="sublist-item"
							onClick={() => setCounter3(idx)}
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
							</span>
						</div>
					))}
			</div>
		</>
	);
}

export default SubSubList;
