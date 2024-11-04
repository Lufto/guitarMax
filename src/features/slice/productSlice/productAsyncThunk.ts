import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { URL } from '../../../entities/api/queries/query';

export const fetchGETProducts = createAsyncThunk(
	'product/getProducts',
	async () => {
		const response = await axios.get(`${URL}products`);
		return response.data;
	}
);
