import { createSlice } from '@reduxjs/toolkit';
import { IProductSlice } from './IProductSlice';
import { fetchGETProducts } from './productAsyncThunk';

const initialState: IProductSlice = {
	products: [],
	maxPrise: 0,
};

export const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchGETProducts.fulfilled, (state, action) => {
			state.products = action.payload;
			state.maxPrise = state.products.reduce((acc, curr) =>
				acc.price > curr.price ? acc : curr
			).price;
		});
	},
});

export const {} = productSlice.actions;

export default productSlice.reducer;
