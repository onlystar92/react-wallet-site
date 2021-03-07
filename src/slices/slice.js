import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
	name: "slice",
	initialState: {
		title: "",
		desc: "",
		icon: "",
		tab: "",
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
	},
});

export const selectTitle = (state) => state.slice.title;
export const selectDesc = (state) => state.slice.desc;
export const selectIcon = (state) => state.slice.icon;
export const selectTab = (state) => state.slice.tab;

export const { setTitle, setDesc, setIcon, setTab } = slice.actions;

export default slice.reducer;
