import React from "react";

import ListHead from "./ListHead";

function List({ data }) {
	return (
		<div>
			{data.map((item, idx) => {
				return (
					<ListHead
						icon={item.icon}
						title={item.title}
						items={item.items}
						idx={idx}
					/>
				);
			})}
		</div>
	);
}

export default List;
