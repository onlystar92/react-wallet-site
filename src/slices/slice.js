import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
	name: "slice",
	initialState: {
		title: "",
		desc: "",
		icon: "",
		tab: "",
		sidebarActive: "",
		listHeadCollapse: "",
	},
	reducers: {
		setTitle: (state, action) => {
			state.title = action.payload;
		},
		setDesc: (state, action) => {
			state.desc = action.payload;
		},
		setIcon: (state, action) => {
			state.icon = action.payload;
		},
		setTab: (state, action) => {
			state.tab = action.payload;
		},
		setSidebarActive: (state, action) => {
			state.sidebarActive = action.payload;
		},
		setListHeadCollapse: (state, action) => {
			state.listHeadCollapse = action.payload;
		},
	},
});

export const selectTitle = (state) => state.slice.title;
export const selectDesc = (state) => state.slice.desc;
export const selectIcon = (state) => state.slice.icon;
export const selectTab = (state) => state.slice.tab;
export const selectSidebar = (state) => state.slice.sidebarActive;
export const selectListHeadCollapse = (state) => state.slice.listHeadCollapse;

export const {
	setTitle,
	setDesc,
	setIcon,
	setTab,
	setSidebarActive,
	setListHeadCollapse,
} = slice.actions;

export default slice.reducer;
