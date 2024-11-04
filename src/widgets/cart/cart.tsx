import { FC } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../entities/hooks/useCart/useCart';
import { Button } from '../../entities/ui/button/button';
import NoSearch from '../../entities/ui/noSearch/noSearch';
import CartList from '../../shared/cartList/cartList';
import style from './cart.module.scss';

const Cart: FC = function Cart() {
	const { allCurrentItem, sumOrder, cartItem } = useCart();

	if (cartItem.length === 0) {
		return (
			<>
				<NoSearch
					text={
						'Корзина пустая, вы можете выбрать товары из предложенного каталога'
					}
				>
					<Link to={'/'}>
						<Button mod="brawn">Перейти к каталогу</Button>
					</Link>
				</NoSearch>
			</>
		);
	}

	return (
		<main className={style.cart}>
			<div className={style.container}>
				<h1>Корзина</h1>
				<ul className={style.main_data}>
					<li className={style.main_data_item}>
						Товаров в заказе: <span>{allCurrentItem} шт</span>
					</li>
					<li className={style.main_data_item}>
						Общая сумма заказа: <span>{sumOrder} $</span>
					</li>
					<li className={style.main_data_item}>
						<span>Состав заказа:</span>
						<CartList mod={'cart'} />
					</li>
				</ul>
				<Link
					to={'/order'}
					className={style.button_buy}
				>
					<Button mod="brawn">Оформить заказ</Button>
				</Link>
			</div>
		</main>
	);
};

export default Cart;
