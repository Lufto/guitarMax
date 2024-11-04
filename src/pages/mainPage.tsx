import { FC } from 'react';
import Catalog from '../widgets/catalog/catalog';
import Footer from '../widgets/footer/footer';
import Header from '../widgets/header/header';
import Promo from '../widgets/promo/promo';

const MainPage: FC = function MainPage() {
	return (
		<>
			<Header />
			<Promo />
			<Catalog />
			<Footer />
		</>
	);
};

export default MainPage;
