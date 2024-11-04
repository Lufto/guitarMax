import { FC } from 'react';
import Footer from '../widgets/footer/footer';
import Header from '../widgets/header/header';
import Order from '../widgets/order/order';

const OrderPage: FC = function OrderPage() {
	return (
		<>
			<Header />
			<Order />
			<Footer />
		</>
	);
};

export default OrderPage;
