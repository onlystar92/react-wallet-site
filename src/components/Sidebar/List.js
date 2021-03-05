import React from "react";
import "./List.css";

import ListHead from "./ListHead";

function List({ data, setCounter1, setCounter2, setCounter3 }) {
	return (
		<div className="list-container">
			{data.map((item, idx) => {
				return (
					<ListHead
						setCounter1={setCounter1}
						idx={idx}
						icon={item.icon}
						title={item.title}
						items={item.items}
						setCounter2={setCounter2}
						setCounter3={setCounter3}
					/>
				);
			})}
		</div>
	);
}

export default List;
