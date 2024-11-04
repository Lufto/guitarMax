import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	personInfo: {},
	cardInfo: {},
	addressInfo: {}
};

export const orderSlice = createSlice({
	name: 'page',
	initialState,
	reducers: {
		setPersonInfo: (state, action) => {
			state.personInfo = action.payload;
		},
		setCardInfo: (state, action) => {
			state.cardInfo = action.payload;
		},
		setAddressInfo: (state, action) => {
			state.addressInfo = action.payload;
		},
	},
});

export const { setPersonInfo, setCardInfo, setAddressInfo } = orderSlice.actions;

export default orderSlice.reducer;
