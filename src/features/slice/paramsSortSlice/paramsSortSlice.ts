import { createSlice } from '@reduxjs/toolkit';
import { setPageActive } from '../pageSlice/pageSlice';
import { IParamsSortSlice, IToggleDispatch } from './IParamsSortSlice';

const initialState: IParamsSortSlice = {
	typesFilter: [],
	sort: 'По цене',
	search: '',
	absence: false,
	bestseller: false,
	fromPrise: 0,
	upPrise: 0,
};

export const paramsSortSlice = createSlice({
	name: 'paramsSort',
	initialState,
	reducers: {
		setAddFilter: (state, action) => {
			state.typesFilter.push(action.payload);
		},

		setDeleteFilter: (state, action) => {
			state.typesFilter = state.typesFilter.filter(
				filter => filter !== action.payload
			);
		},

		setSearch: (state, action) => {
			state.search = action.payload;
		},

		setClearFilter: state => {
			state.typesFilter = [];
			state.absence = false;
			state.bestseller = false;
			state.fromPrise = 0;
			setPageActive(1);
		},

		setToggle: (state, action: IToggleDispatch) => {
			state[action.payload] = !state[action.payload];
		},

		setRestoreSort: (state, action) => {
			state.sort = action.payload;
		},

		setRestoreFromPrise: (state, action) => {
			state.fromPrise = action.payload;
		},

		setRestoreUpPrise: (state, action) => {
			state.upPrise = action.payload;
		},
	},
});

export const {
	setAddFilter,
	setDeleteFilter,
	setClearFilter,
	setToggle,
	setSearch,
	setRestoreSort,
	setRestoreFromPrise,
	setRestoreUpPrise,
} = paramsSortSlice.actions;

export default paramsSortSlice.reducer;
