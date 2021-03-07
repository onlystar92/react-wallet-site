import React from "react";

function SubSubList({ items, setCounter3 }) {
	const icon = { width: "20px", height: "20px" };
	const title = { fontSize: "12px", color: "#4C566C" };
	const desc = { fontSize: "12px", color: "#A7ABB6" };

	return (
		<>
			{items &&
				items.map((item, idx) => (
					<div
						className="d-flex justify-content-between align-items-center ml-4 pl-4 pt-2 pr-4 pb-2"
						style={{ cursor: "pointer" }}
						onClick={() => setCounter3(idx)}
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
					</div>
				))}
		</>
	);
}

export default SubSubList;
