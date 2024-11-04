import { FC } from 'react';
import { Button } from '../../button/button';
import { IModalCard } from './IModalCard';

import style from './modalCard.module.scss';

const ModalCard: FC<IModalCard> = function ({ data, onAdd, currentCard }) {
	return (
		<div className={style.wrap}>
			<div>
				{data.is_bestseller && (
					<div className={style.is_bestseller}>Бестселлер</div>
				)}
			</div>
			<img
				className={style.image}
				src={data.image}
				alt={data.name}
			/>
			<div className={style.info}>
				<h2 className={style.title}>{data.name}</h2>
				<p className={style.prise}>{data.price} $</p>
				<Button
					mod={'brawn'}
					onClick={onAdd}
					disabled={currentCard}
				>
					Добавить
				</Button>
			</div>
		</div>
	);
};

export default ModalCard;
