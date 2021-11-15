import { ClassesState } from "./classTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ClassesState = {
	classes: [],
	loading: false,
};

export const classSlice = createSlice({
	name: "classes",
	initialState,
	reducers: {
		setClasses: (state, action) => {
			state.loading = false;
			state.classes = action.payload;
		},
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.loading = action.payload;
		},
	},
});

const classReducer = classSlice.reducer;

export const classActions = classSlice.actions;
export default classReducer;
