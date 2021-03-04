import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
	name: "auth",
	initialState: {
		email: "",
		password: "",
	},
	reducers: {
		setEmail: (state, action) => {
			state.email = action.payload;
		},
		setPassword: (state, action) => {
			state.password = action.payload;
		},
	},
});

export const selectEmail = (state) => state.auth.email;
export const selectPassword = (state) => state.auth.password;

export const { setEmail, setPassword } = slice.actions;

export default slice.reducer;
