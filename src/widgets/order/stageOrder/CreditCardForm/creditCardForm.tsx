import { ChangeEvent, FC, useState } from 'react';
import { CardForm } from './cardItem/cardForm';
import { CardDetails } from './ICard';

import { IOrder } from '../../IOrder';
import { CreditCard } from './cardItem/creditCard';
import './CreditCardForm.scss';

export const CreditCardForm: FC<IOrder> = ({ setStage }) => {
	const [cardDetails, setCardDetails] = useState<CardDetails>({
		cardStatus: '',
		cardNumber: '',
		cardName: '',
		expirationMonth: 'MM',
		expirationYear: 'YY',
		cvv: '',
	});

	const cvvFocusHandler = () =>
		setCardDetails(prev => ({ ...prev, cardStatus: 'turned' }));
	const cvvBlurHandler = () =>
		setCardDetails(prev => ({ ...prev, cardStatus: '' }));

	const numberInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
		let input = e.target.value.replace(/\D/g, '');
		input = input.replace(/(.{4})/g, '$1 ').trim();
		setCardDetails(prev => ({ ...prev, cardNumber: input }));
	};

	const nameInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setCardDetails(prev => ({
			...prev,
			cardName: e.target.value.toUpperCase(),
		}));
	};

	const monthSelectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
		const month = e.target.value.padStart(2, '0');
		setCardDetails(prev => ({ ...prev, expirationMonth: month }));
	};

	const yearSelectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
		const year = (Number(e.target.value) % 100).toString().padStart(2, '0');
		setCardDetails(prev => ({ ...prev, expirationYear: year }));
	};

	const cvvInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
		if (!/^\d*$/.test(e.target.value)) return;
		setCardDetails(prev => ({ ...prev, cvv: e.target.value }));
	};

	return (
		<>
			<div className="wrapper">
				<CardForm
					cvvFocusHandler={cvvFocusHandler}
					cvvBlurHandler={cvvBlurHandler}
					numberInputHandler={numberInputHandler}
					nameInputHandler={nameInputHandler}
					onMonthSelect={monthSelectHandler}
					onYearSelect={yearSelectHandler}
					onCvvInput={cvvInputHandler}
					cvv={cardDetails.cvv}
					cardNumber={cardDetails.cardNumber}
					cardName={cardDetails.cardName}
					setStage={setStage}
				/>
				<CreditCard
					status={cardDetails.cardStatus}
					number={cardDetails.cardNumber}
					name={cardDetails.cardName}
					expirationMonth={cardDetails.expirationMonth}
					expirationYear={cardDetails.expirationYear}
					cvv={cardDetails.cvv}
				/>
			</div>
		</>
	);
};

export default CreditCardForm;
