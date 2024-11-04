import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

import { URL } from '../../../entities/api/queries/query';

import { TCartItem } from './ICartSlice';

export const fetchGETCart = createAsyncThunk('cart/getCartItem', async () => {
	const response = await axios.get(`${URL}cart`);
	return response.data;
});

export const fetchPOSTCart = createAsyncThunk<TCartItem, TCartItem>(
	'cart/postCartItem',
	async data => {
		const response = await axios.post(`${URL}cart`, data);
		return response.data;
	}
);

export const fetchDELETECart = createAsyncThunk<TCartItem, number | string>(
	'cart/deleteCartItem',
	async id => {
		const response = await axios.delete(`${URL}cart/${id}`);
		return response.data;
	}
);

export const fetchPUTCart = createAsyncThunk<TCartItem, TCartItem>(
	'cart/putCartItem',
	async data => {
		const response = await axios.put(`${URL}cart/${data.id}`, data);
		return response.data;
	}
);
