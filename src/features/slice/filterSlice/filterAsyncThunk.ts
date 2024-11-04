import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { URL } from '../../../entities/api/queries/query';

export const fetchGETInstrument = createAsyncThunk(
	'filter/getFilterInstrument',
	async () => {
		const response = await axios.get(`${URL}instrument_types`);
		return response.data;
	}
);

export const fetchGETAccessory = createAsyncThunk(
	'filter/getFilterAccessory',
	async () => {
		const response = await axios.get(`${URL}accessory_types`);
		return response.data;
	}
);

export const fetchGETSort = createAsyncThunk(
	'filter/getSortValue',
	async () => {
		const response = await axios.get(`${URL}sort_value`);
		return response.data;
	}
);
