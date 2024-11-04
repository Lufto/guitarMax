import { CardFormProps } from '../ICard';

import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '../../../../../entities/ui/button/button';
import Input from '../../../../../entities/ui/input/input';
import '../CreditCardForm.scss';
import { CardExpirationDate } from './cardExpirationDate';

export const CardForm: React.FC<CardFormProps> = ({
	cvvFocusHandler,
	cvvBlurHandler,
	numberInputHandler,
	nameInputHandler,
	onMonthSelect,
	onYearSelect,
	onCvvInput,
	cvv,
	cardNumber,
	cardName,
	setStage,
}) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();

	const onSubmit: SubmitHandler<FormData> = data => {
		setStage('card');
	};

	return (
		<div className="card-form">
			<form
				className="card-form__inner"
				onSubmit={handleSubmit(onSubmit)}
			>
				<label className="card-form__input-label">
					Card Number
					<Input
						// {...register('values', {
						// 	required: true,
						// 	pattern: /^\+?[1-9]\d{11}$/,
						// })}
						onChange={numberInputHandler}
						value={cardNumber}
						type={'number'}
						className="card-form__input"
					/>
				</label>
				<label className="card-form__input-label">
					Card Name
					<Input
						// {...register('values', {
						// 	required: true,
						// 	pattern: /^\+?[1-9]\d{11}$/,
						// })}
						onChange={nameInputHandler}
						value={cardName}
						type={'number'}
						className="card-form__input"
					/>
				</label>
				<div className="wrap-inp">
					<CardExpirationDate
						onMonthSelect={onMonthSelect}
						onYearSelect={onYearSelect}
					/>
					<label className="card-form__input-label">
						CVV
						<Input
							// {...register('values', {
							// 	required: true,
							// 	pattern: /^\+?[1-9]\d{11}$/,
							// })}
							type={'number'}
							className="card-form__input"
							value={cvv}
							onFocus={cvvFocusHandler}
							onBlur={cvvBlurHandler}
							onChange={onCvvInput}
							required
						/>
					</label>
				</div>

				<div className="button_menu">
					<Button
						mod="secondaryGray"
						onClick={() => setStage('formalization')}
					>
						Назад
					</Button>

					<Button
						mod="brawn"
						type="submit"
						onClick={() => setStage('address')}
					>
						Продолжить
					</Button>
				</div>
			</form>
		</div>
	);
};
