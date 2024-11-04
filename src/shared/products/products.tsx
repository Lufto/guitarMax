import { FC, useEffect } from 'react';
import { useAppDispatch } from '../../entities/hooks/ReduxHooks/reduxHooks';
import { fetchGETProducts } from '../../features/slice/productSlice/productAsyncThunk';

import useCart from '../../entities/hooks/useCart/useCart';
import useSortProduct from '../../entities/hooks/useSortProduct/useSortProduct';

import Card from '../../entities/ui/card/card';
import Pagination from '../pagination/pagination';

import style from './products.module.scss';

const Product: FC = function Product() {
	const { cutList } = useSortProduct();
	const { handleAddToCart, cartItem } = useCart();

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchGETProducts());
	}, [dispatch]);

	return (
		<section className={style.products}>
			<ul>
				{cutList?.map(data => {
					return (
						<Card
							mod={'product'}
							data={data}
							key={data.id}
							handleAddToCart={handleAddToCart}
							cartItem={cartItem}
						/>
					);
				})}
			</ul>

			<Pagination />
		</section>
	);
};

export default Product;
