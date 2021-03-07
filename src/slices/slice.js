import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
	name: "slice",
	initialState: {
		title: "",
		desc: "",
		icon: "",
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
	},
});

export const selectTitle = (state) => state.slice.title;
export const selectDesc = (state) => state.slice.desc;
export const selectIcon = (state) => state.slice.icon;

export const { setTitle, setDesc, setIcon } = slice.actions;

export default slice.reducer;
