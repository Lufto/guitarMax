import { ChangeEvent } from 'react';

export interface CardDetails {
	cardStatus: string;
	cardNumber: string;
	cardName: string;
	expirationMonth: string;
	expirationYear: string;
	cvv: string;
}

export interface CardProps {
	status: string;
	number: string;
	name: string;
	expirationMonth: string;
	expirationYear: string;
	cvv: string;
}

export interface CardFormProps {
	cvvFocusHandler: () => void;
	cvvBlurHandler: () => void;
	numberInputHandler: (e: ChangeEvent<HTMLInputElement>) => void;
	nameInputHandler: (e: ChangeEvent<HTMLInputElement>) => void;
	onMonthSelect: (e: ChangeEvent<HTMLSelectElement>) => void;
	onYearSelect: (e: ChangeEvent<HTMLSelectElement>) => void;
	onCvvInput: (e: ChangeEvent<HTMLInputElement>) => void;
	cvv: string;
	cardNumber: string;
	cardName: string;
	setStage: (stage: string) => void;
}

export interface CardExpirationDateProps {
	onMonthSelect: (e: ChangeEvent<HTMLSelectElement>) => void;
	onYearSelect: (e: ChangeEvent<HTMLSelectElement>) => void;
}
