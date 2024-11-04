import { createSlice } from '@reduxjs/toolkit';

import {
	fetchGETAccessory,
	fetchGETInstrument,
	fetchGETSort,
} from './filterAsyncThunk';
import { IFilterSlice } from './IFilterSlice';

const initialState: IFilterSlice = {
	instrument: [],
	accessory: [],
	sort: [],
};

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchGETInstrument.fulfilled, (state, action) => {
			state.instrument = action.payload;
		});

		builder.addCase(fetchGETAccessory.fulfilled, (state, action) => {
			state.accessory = action.payload;
		});

		builder.addCase(fetchGETSort.fulfilled, (state, action) => {
			state.sort = action.payload;
		});
	},
});

export const {} = filterSlice.actions;

export default filterSlice.reducer;
