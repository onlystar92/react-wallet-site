export function getClass({ isOpen, subOpen }) {
	let x = "";
	if (isOpen) {
		if (subOpen) {
			x = "dashboard-open2";
		} else {
			x = "dashboard-close2";
		}
	} else if (!isOpen) {
		x = "dashboard-close";
	}
	return x;
}
