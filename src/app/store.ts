import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/slice/cartSlice/cartSlice';
import filterReducer from '../features/slice/filterSlice/filterSlice';
import orderSlice from '../features/slice/orderSlice/orderSlice';
import pageReducer from '../features/slice/pageSlice/pageSlice';
import paramsSortReducer from '../features/slice/paramsSortSlice/paramsSortSlice';
import productReducer from '../features/slice/productSlice/productSlice';

export const store = configureStore({
	reducer: {
		paramsSort: paramsSortReducer,
		cart: cartReducer,
		product: productReducer,
		filter: filterReducer,
		page: pageReducer,
		order: orderSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
