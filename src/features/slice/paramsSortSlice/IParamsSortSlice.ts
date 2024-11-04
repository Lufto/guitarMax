import { PayloadAction } from '@reduxjs/toolkit';

export interface IParamsSortSlice {
	typesFilter: string[];
	sort: string;
	search: string;
	absence: boolean;
	bestseller: boolean;
	fromPrise: number;
	upPrise: number;
}

export type IToggleFilterKey = keyof Pick<
	IParamsSortSlice,
	'absence' | 'bestseller'
>;

export type IToggleDispatch = PayloadAction<IToggleFilterKey>;
