import { Link } from 'react-router-dom';

import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch } from '../../../../entities/hooks/ReduxHooks/reduxHooks';
import useCart from '../../../../entities/hooks/useCart/useCart';
import { Button } from '../../../../entities/ui/button/button';
import Input from '../../../../entities/ui/input/input';
import { setPersonInfo } from '../../../../features/slice/orderSlice/orderSlice';
import CartList from '../../../../shared/cartList/cartList';
import { IOrder } from '../../IOrder';
import style from './formalization.module.scss';
import { IFormalizationData } from './IFormalization';

const Formalization: FC<IOrder> = function Formalization({ setStage }) {
	const dispatch = useAppDispatch();
	const { sumOrder } = useCart();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormalizationData>();

	const onSubmit: SubmitHandler<IFormalizationData> = data => {
		dispatch(setPersonInfo(data));
		setStage('card');
	};

	return (
		<>
			<CartList mod={'order'} />
			<div className={style.prise}>
				Общая сумма заказа: <span>{sumOrder} $</span>
			</div>

			<form onSubmit={handleSubmit(onSubmit)}>
				<Input
					{...register('name', { required: true, pattern: /^[А-Яа-я]/i })}
					placeholder={'Имя'}
					type={'text'}
				/>
				{errors?.name?.type === 'required' && (
					<p>Обязательное поле для ввода</p>
				)}
				{errors?.name?.type === 'pattern' && <p>Поле заполнено не верно</p>}

				<Input
					{...register('surname', { required: true, pattern: /^[А-Яа-я]/i })}
					placeholder={'Фамилия'}
					type={'text'}
				/>
				{errors?.surname?.type === 'required' && (
					<p>Обязательное поле для ввода</p>
				)}
				{errors?.surname?.type === 'pattern' && <p>Поле заполнено не верно</p>}

				<Input
					{...register('phone', {
						required: true,
						pattern: /^\+?[1-9]\d{11}$/,
					})}
					placeholder={'Номер телефона'}
					type={'number'}
				/>
				{errors?.phone?.type === 'required' && (
					<p>Обязательное поле для ввода</p>
				)}
				{errors?.phone?.type === 'pattern' && <p>Поле заполнено не верно</p>}

				<Input
					{...register('email', {
						required: true,
						pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
					})}
					placeholder={'E-mail'}
					type={'email'}
				/>
				{errors?.email?.type === 'required' && (
					<p>Обязательное поле для ввода</p>
				)}
				{errors?.email?.type === 'pattern' && <p>Поле заполнено не верно</p>}

				<div className="button_menu">
					<Link to={'/cart'}>
						<Button mod="secondaryGray">Назад</Button>
					</Link>

					<Button
						mod="brawn"
						type="submit"
					>
						Продолжить
					</Button>
				</div>
			</form>
		</>
	);
};

export default Formalization;
