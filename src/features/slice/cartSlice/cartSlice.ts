import { createSlice } from '@reduxjs/toolkit';
import { ICartSlice } from './ICartSlice';
import {
	fetchDELETECart,
	fetchGETCart,
	fetchPOSTCart,
	fetchPUTCart,
} from './cartSliceThunk';

const initialState: ICartSlice = {
	cartItem: [],
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchGETCart.fulfilled, (state, action) => {
			state.cartItem = action.payload;
		});
		builder.addCase(fetchPOSTCart.fulfilled, (state, action) => {
			state.cartItem.push(action.payload);
		});
		builder.addCase(fetchDELETECart.fulfilled, (state, action) => {
			state.cartItem.filter(item => item !== action.payload);
		});
		builder.addCase(fetchPUTCart.fulfilled, (state, action) => {
			state.cartItem.map(item =>
				item.id === action.payload.id ? (item = action.payload) : item
			);
		});
	},
});

export const {} = cartSlice.actions;

export default cartSlice.reducer;
