import clsx from 'clsx';
import { FC, useState } from 'react';
import Cart from '../../../assets/icons/cart.svg';
import Show from '../../../assets/icons/Show.svg';
import Modal from '../modal/modal';
import style from './card.module.scss';
import { ICardCart, ICardProduct, ICart, isCartItem } from './ICard';

const Card: FC<(ICart & ICardCart) | ICardProduct> = ({
	mod,
	data,
	handleAddToCart,
	handleDeleteToCart,
	handlePutToCart,
	cartItem,
}) => {
	const [isModalActive, setModalActive] = useState(false);
	const [current, setCurrent] = useState(
		isCartItem(data) ? data.ordered_quantity : 0
	);

	const isItemInCart = cartItem?.some(item => item.id_products === data.id);
	const isStockAvailable = data.stock_quantity > 0;

	const toggleModal = (state: boolean) => setModalActive(state);

	const updateQuantity = (newQuantity: number) => {
		const validatedQuantity = Math.max(
			1,
			Math.min(newQuantity, data.stock_quantity)
		);
		setCurrent(validatedQuantity);
		if (isCartItem(data)) {
			handlePutToCart?.(data, validatedQuantity);
		}
	};

	return (
		<li
			className={clsx(
				style.card,
				style[`card_${mod}`],
				!isStockAvailable && style.card_disable
			)}
		>
			<div className={style.wrap}>
				<div className={style.container}>
					<img
						src={data.image}
						alt={data.name}
					/>
				</div>
				<div className={style.card__info}>
					<h4>
						{data.name.length > 25 ? `${data.name.slice(0, 25)}...` : data.name}
					</h4>
					<span>{data.price} $</span>
				</div>
			</div>

			<div className={style.card__menu}>
				{isCartItem(data) ? (
					<>
						<div className={style.current__menu}>
							<button
								className={style.current__menu_button}
								onClick={() => current > 1 && updateQuantity(current - 1)}
							>
								-
							</button>
							<input
								type="number"
								className={style.current__menu_current}
								value={current || ''}
								onChange={e => updateQuantity(+e.target.value)}
							/>
							<button
								className={style.current__menu_button}
								onClick={() =>
									current < data.stock_quantity && updateQuantity(current + 1)
								}
							>
								+
							</button>
						</div>

						<button
							className={style.button__delete}
							onClick={() => handleDeleteToCart?.(data.id)}
						>
							удалить
						</button>

						<div className={style.currentProduct}>
							{data.ordered_quantity} шт
						</div>
					</>
				) : (
					<>
						<button
							className={clsx(style.button__shove)}
							onClick={() => toggleModal(true)}
						>
							<img
								src={Show}
								alt="Иконка кнопки посмотреть"
							/>
						</button>
						<button
							className={clsx(
								style.button__addCart,
								isItemInCart && style.button__addCart_disable
							)}
							disabled={isItemInCart}
							onClick={() => handleAddToCart?.(data)}
						>
							<img
								src={Cart}
								alt="Иконка кнопки добавить в корзину"
							/>
						</button>
					</>
				)}
			</div>

			{isModalActive && (
				<Modal
					data={data}
					onClose={() => toggleModal(false)}
					onAdd={() => handleAddToCart?.(data)}
					currentCard={isItemInCart}
				/>
			)}
		</li>
	);
};

export default Card;
