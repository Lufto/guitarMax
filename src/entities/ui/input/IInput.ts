import { InputHTMLAttributes } from 'react';

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
	placeholder?: string;
	type: string;
	value?: string;
	required?: boolean;
}
