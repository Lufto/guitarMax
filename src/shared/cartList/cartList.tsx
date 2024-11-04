import { FC } from 'react';
import useCart from '../../entities/hooks/useCart/useCart';
import Card from '../../entities/ui/card/card';

import style from './cartList.module.scss';
import { ICartList } from './ICartList';

const CartList: FC<ICartList> = function CartList(props) {
	const { cartItem, handleDeleteToCart, handlePutToCart } = useCart();

	return (
		<ul className={style.cart_list}>
			{cartItem.map(data => {
				return (
					<Card
						data={data}
						mod={props.mod}
						key={data.id}
						handleDeleteToCart={handleDeleteToCart}
						handlePutToCart={handlePutToCart}
					/>
				);
			})}
		</ul>
	);
};

export default CartList;
