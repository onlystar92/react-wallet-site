import React from "react";

function SubSubList({ items, setCounter3 }) {
	const icon = { width: "20px", height: "20px" };

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
								<div className="col" style={icon}></div>
							)}
							<span className="col">{item.title}</span>
							<span className="col">{item.description}</span>
						</div>
					</div>
				))}
		</>
	);
}

export default SubSubList;
