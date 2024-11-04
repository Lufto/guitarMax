import { FC } from 'react';
import '../CreditCardForm.scss';
import { CardExpirationDateProps } from '../ICard';

export const CardExpirationDate: FC<CardExpirationDateProps> = ({
	onMonthSelect,
	onYearSelect,
}) => {
	const months = Array.from({ length: 12 }, (_, i) => i + 1).map(i => (
		<option
			key={i}
			value={i}
		>
			{i.toString().padStart(2, '0')}
		</option>
	));
	const years = Array.from(
		{ length: 12 },
		(_, i) => new Date().getFullYear() + i
	).map(year => (
		<option
			key={year}
			value={year}
		>
			{year}
		</option>
	));
	return (
		<>
			<label className="card-form__input-label">
				Expiration Date
				<div className="wrap-inp-date">
					<select
						defaultValue="MM"
						onChange={onMonthSelect}
						className="card-form__input"
						required
					>
						<option disabled>MM</option>
						{months}
					</select>
					<select
						defaultValue="YY"
						onChange={onYearSelect}
						className="card-form__input"
						required
					>
						<option disabled>YY</option>
						{years}
					</select>
				</div>
			</label>
		</>
	);
};
