import { FC } from 'react';
import Filters from '../../shared/filters/filters';
import Product from '../../shared/products/products';
import style from './catalog.module.scss';

const Catalog: FC = function Catalog() {
	return (
		<main
			className={style.catalog}
			id="products"
		>
			<div className={style.container}>
				<h2>Каталог</h2>
				<div className={style.wrapper}>
					<Filters />
					<Product />
				</div>
			</div>
		</main>
	);
};

export default Catalog;
