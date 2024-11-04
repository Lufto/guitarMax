import { FC } from 'react';
import Cart from '../widgets/cart/cart';
import Footer from '../widgets/footer/footer';
import Header from '../widgets/header/header';

const CartPage: FC = function CartPage() {
	return (
		<>
			<Header />
			<Cart />
			<Footer />
		</>
	);
};

export default CartPage;
