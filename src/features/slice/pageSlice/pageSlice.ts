import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	pageActive: 1,
	allCurrentPage: 0,
};

export const pageSlice = createSlice({
	name: 'page',
	initialState,
	reducers: {
		setPageActive: (state, action) => {
			state.pageActive = action.payload;
		},
		setAllCurrentPage: (state, action) => {
			state.allCurrentPage = action.payload;
		},
	},
});

export const { setPageActive, setAllCurrentPage } = pageSlice.actions;

export default pageSlice.reducer;
